import React, {useContext, useEffect, useState} from "react";
import {ThemeProvider} from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import {Navigate, BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";
import StudentRegistration from "./components/registration/StudentRegistration";
import PasswordChange from "./components/changePassword/ChangePassword";
import {ToastContainer} from "react-toastify";
import AuthContext from "./context/AuthProvider";
import axios from "axios";
import {URL_GET_USER_DATA} from "./utils/backend-links";
import {LinearProgress} from "@mui/material";
import {MainPage} from "./components/MainPage/MainPage";
import {Header} from "./components/header/Header";

export const App = () => {

    const {auth, setAuth} = useContext(AuthContext);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            await axios.get(URL_GET_USER_DATA, {
                withCredentials: true
            })
                .then((res) => {
                    setAuth(res.data);
                })
                .finally(() => {
                    setLoading(false);
                });
        })();
    }, []);

    if (loading) {
        return <LinearProgress/>;
    }

    return (
        <>
            <ToastContainer limit={3}/>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        {
                            auth
                                ?
                                <Route path='/' element={
                                    <>
                                        <Header/>
                                        <MainPage role={auth.role}/>
                                    </>
                                }/>
                                :
                                <>
                                    <Route path='/' element={<LoginPage/>}/>
                                    <Route path='/passwordreset' element={<ForgotPasswordPage/>}/> //@TODO
                                    <Route path='/student_registration' element={<StudentRegistration/>}/>//@TODO
                                    <Route path='/passwordchange/:id/:token' element={<PasswordChange/>}/>
                                </>
                        }
                        <Route path='*' element={<Navigate to='/'/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    )
}


