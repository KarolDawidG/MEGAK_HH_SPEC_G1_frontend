
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";
import StudentRegistration from "./components/registration/StudentRegistration";
import { ToastContainer } from "react-toastify";

export const App = () => {

  return (
    <>
       <ToastContainer limit={3} />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/passwordreset' element={<ForgotPasswordPage/>} />
            <Route path='/student_registration' element={<StudentRegistration/>} />
            
          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </>
  )
}


