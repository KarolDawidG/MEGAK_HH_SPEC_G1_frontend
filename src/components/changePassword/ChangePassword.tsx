
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";



const PasswordChange = () => {

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
                
                <Link to="/" > 
                <img src="/Megaklogo.png" alt="MegaK logo" height="75" ></img>
                </Link>
                <Typography component="h1" variant="h5">
                
                </Typography>
                <Box component="form" >
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
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="new-password"
                        label="Nowe hasło"
                        type="password"
                        id="new-password"
                        autoComplete="new-password"
                    />

                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="new-password-confirm"
                        label="Potwierdź hasło"
                        type="password"
                        id="new-password-confirm"
                        autoComplete="new-password-confirm"
                    />



                    <Grid container rowSpacing={2.5}>
                        <Grid item xs={12} >
                            <Typography variant="body2" align="right" ><Link href="http://localhost:5173/" variant="body2" underline="hover">

                            </Link></Typography>

                        </Grid>


                        <Grid item xs={12} >
                            <Button
                                type="submit"
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

export default PasswordChange;