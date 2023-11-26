
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";
import StudentRegistration from "./components/registration/StudentRegistration";


export const App = () => {

  return (
    <>

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/passwordreset' element={<ForgotPasswordPage/>} />
            <Route path='/student_registration' element={<StudentRegistration/>} />
            
          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </>
  )
}


