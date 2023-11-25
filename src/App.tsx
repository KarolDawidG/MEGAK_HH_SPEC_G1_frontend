
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./components/login/LoginPage"
import theme from "../styles/theme";
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ForgotPasswordPage from "./components/forgotPassword/ForgotPassword";


export const App = () => {

  return (
    <>

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/passwordreset' element={<ForgotPasswordPage/>} />
          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </>
  )
}


