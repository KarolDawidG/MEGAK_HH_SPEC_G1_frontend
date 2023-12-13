import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { notify } from '../utils/Notify';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export const Activation = () => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { id, token } = useParams();
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const redirect = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== password2) {
            notify('Hasła powinny byc takie same!');
            return; 
        }
        try {
            const response = await axios.post(`http://localhost:3001/user/register`, {
                id,
                token,
                password
              });
            if (response.status === 201){
                notify("Aktywacja uzytkownika zakończona pomyślnie! Za chwilę zostaniesz przekierowany na stronę główną!");
                setTimeout(() => redirect('/'), 2000);
            }
            
            
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message); 
            } else {
                console.error('Błąd aktywacji użytkownika', error);
                notify("Wystąpił problem. Spróbuj ponownie.");
            }
        }
    };

    useEffect(() =>{    
        setPasswordsMatch(password === password2);
    })

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
                
                <Link href="/" > 
                <img src="/Megaklogo.png" alt="MegaK logo" height="75" ></img>
                </Link>
                <Typography component="h1" variant="h5">
                
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>

                    <Typography component="h2" variant="h6" align="center">
                        Aby dokończyć rejestrację - podaj nowe hasło!
                    </Typography>

                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password"
                        label="Hasło"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="new-password"
                        label="Powtórz hasło"
                        type="password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        id="new-password"
                        autoComplete="new-password"
                    />

                    <Grid container rowSpacing={2.5}>
                        <Grid item xs={12} >
                            <Typography variant="body2" align="right" >
                            <Link href="http://localhost:5173" variant="body2" underline="hover">
                                Menu główne
                            </Link></Typography>

                        </Grid>


                        <Grid item xs={12} >
                            <Button
                                type="submit"
                                disabled={!passwordsMatch}
                                fullWidth
                                variant="contained"

                            >
                                Zmień hasło
                            </Button>

                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </Container>

    )

}

