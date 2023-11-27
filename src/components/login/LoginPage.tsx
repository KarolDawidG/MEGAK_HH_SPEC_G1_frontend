import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// frontend - backend logic
import axios from 'axios';
import {useState} from "react";

//error comunications
import { notify } from "../utils/Notify";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Walidacja adresu e-mail
        if (!validateEmail(email)) {
            notify("Incorrect email. Please type correct data!");
            console.error('Incorrect email.');
            return;
        }

        // Logowanie danych formularza
        console.log(`Email: ${email} | Password: ${password}`);


        // Wywołanie API
        try {
            const response = await axios.post('http://example.com/login', {
                email,
                password,
            });
            if (response.status === 200) {
                notify(response.data);
            }
            else {
                notify(response.data.message);
            }
            console.log(response.data);
            notify("Welcome");
            // Dodatkowe działania po pomyślnym zalogowaniu np. redirect na strone usera/admina/hr

        } catch (error) {
            console.error('Błąd logowania', error);
            // Obsługa błędów
        }
    };

// validacja email
    const validateEmail = (email: string) => {
        const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
        return regex.test(email);
    };

    

    return (

        <Container component="main" maxWidth="xs"   >
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection= 'column'
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