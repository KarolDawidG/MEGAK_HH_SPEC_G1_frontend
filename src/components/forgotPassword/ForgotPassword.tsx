
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { validateEmail } from '../utils/validation';
import { notify, notifyError } from '../utils/Notify';
import { useState } from 'react';
//import { URL_FORGOT_PASSWORD } from '../utils/backend-links';


const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            notifyError("Incorrect email. Please type correct data!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/user/change-password', {
                email,
            });
            notify("Jesli adres jest poprawny, link do resetowania hasla zostanie przeslany ma podany e-mail!");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message);
            } else {
                notifyError("Wystąpił problem. Spróbuj ponownie.");
            }
        }
    };

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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus


                    />



                    <Grid container rowSpacing={2.5}>
                        <Grid item xs={12} >
                            <Typography variant="body2" align="right" >
                                <Link href="http://localhost:5173" variant="body2" underline="hover">
                                    Zaloguj się
                                </Link></Typography>

                        </Grid>


                        <Grid item xs={12} >
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"

                            >
                                Resetuj hasło
                            </Button>

                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    )

}

export default ForgotPasswordPage;