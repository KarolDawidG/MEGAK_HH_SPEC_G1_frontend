
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";
import StudentRegistration from "./components/registration/StudentRegistration";
import PasswordChange from "./components/changePassword/ChangePassword";
import { ToastContainer } from "react-toastify";
import {AuthProvider} from './AuthContext';
import {Administrator} from "./components/admin/administrator";
import { MainHrView } from "./components/hr/mainHrView/mainHrView";
import { Activation } from "./components/activation/Activation";

export const App = () => {

  return (
    <AuthProvider>
      <ToastContainer limit={3} />
      <ThemeProvider theme={theme}>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<LoginPage />} /> {/* Done. */}
            <Route path='/passwordreset' element={<ForgotPasswordPage />} />
            <Route path='/student_registration' element={<StudentRegistration />} />
            <Route path='/passwordchange/:id/:token' element={<PasswordChange />} />{/* Done. */}
            <Route path='/activation/:id/:token' element={<Activation />} />{/* Done. */}
            <Route path='/admin' element={<Administrator />} />
            <Route path='/hr' element={<MainHrView />} />

          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </AuthProvider>
  )
}