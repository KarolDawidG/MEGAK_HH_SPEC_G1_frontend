
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";
import StudentRegistration from "./components/registration/StudentRegistration";
import PasswordChange from "./components/changePassword/ChangePassword";
import { ToastContainer } from "react-toastify";
import { MenuStudents } from "./components/students/menuStudents";

export const App = () => {

  return (
    <>
      <ToastContainer limit={3} />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/passwordreset' element={<ForgotPasswordPage />} />
            <Route path='/student_registration' element={<StudentRegistration />} />
            <Route path='/passwordchange' element={<PasswordChange />} />
            <Route path='/menu' element={<MenuStudents />} />
          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </>
  )
}


