import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { URL_LOGIN } from '../utils/backend-links';
import { notify, notifyError } from "../utils/Notify";
import { validateEmail } from '../utils/validation';
import { AuthContext } from '../../AuthContext';


const LoginPage = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        return <div>Loading...</div>; // test
    }

    const { setAuth } = authContext;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const redirect = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            notifyError("Nie poprawny email, podaj poprawne adres!");
            return;
        }

        try {
            const response = await axios.post(URL_LOGIN, {
                email,
                password,
            }, {
                withCredentials: true
            });

            if (response.status === 200) {
                setAuth(response.data);
                await fetchUserData();
                notify(response.data);

            }

            if (response.data.role === 0) {
                redirect("/user-areczek");
                notify("Witam użytkowniku");
            }
            if (response.data.role === 1) {
                redirect("/hr");
                notify("Witaj HR");
            }
            if (response.data.role === 2) {
                redirect("/admin");
                notify("Witaj root");
            }



        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message); // Wyświetlenie wiadomości o błędzie
            } else {
                notifyError("Wystąpił problem podczas logowania. Spróbuj ponownie."); // Ogólna wiadomość o błędzie
            }
        }
    };

    const fetchUserData = async () => {
        try {
            const res = await axios.get('http://localhost:3001/auth/user', {
                withCredentials: true
            });
            setAuth(res.data);
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notifyError(`Error: ${error.response.data.message}`); // Wyświetlenie wiadomości o błędzie
            } else {
                notifyError("Wystąpił problem podczas logowania. Spróbuj ponownie."); // Ogólna wiadomość o błędzie
            }
        }
    }

    useEffect(() => {
        if (authContext?.auth) {
            notify('Logowanie poprawne');
        }
    }, [authContext?.auth]);


    return (

        <Container component="main" maxWidth="xs"   >
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection='column'
            >
                <img src="/Megaklogo.png" alt="MegaK logo" height="75" ></img>

                <Typography component="h1" variant="h5">
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail "
                        name="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        autoFocus


                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password"
                        label="Hasło"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />



                    <Grid container rowSpacing={2.5}>
                        <Grid item xs={12}>
                            <Typography align="right">
                                <Link href="http://localhost:5173/passwordreset" variant="body2" underline="hover">
                                    Zapomniałeś hasła?
                                </Link>
                            </Typography>
                        </Grid>


                        <Grid item xs={8}>
                            <Typography variant="body2">Nie masz konta? <Link href="#" variant="body2" underline="hover">
                                Zarejestruj się
                            </Link></Typography>

                        </Grid>


                        <Grid item xs={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"

                            >
                                Zaloguj się
                            </Button>

                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    )

}

export default LoginPage;