
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const StudentRegistration = () => {

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
                <Box component="form" >
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
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Numer tel"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Imię"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="lastname"
                        label="Nazwisko"
                        name="lastname"
                        autoComplete="lastname"
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="github"
                        label="Login Githuba"
                        name="github"
                        autoComplete="github"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="portfolioUrls"
                        label="Tablica URL-i do portfolio"
                        name="portfolioUrls"
                        autoComplete="portfolioUrls"
                        autoFocus
                        multiline
                        minRows="3"
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="projectUrls"
                        label="Tablica URL-i do GitHuba projektu zaliczeniowego"
                        name="projectUrls"
                        autoComplete="projectUrls"
                        autoFocus
                        multiline
                        minRows="3"
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="bio"
                        label="Bio"
                        name="bio"
                        autoComplete="bio"
                        autoFocus
                        multiline
                        minRows="3"
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="expectedTypeWork"
                        label="Preferowane miejsce pracy"
                        name="expectedTypeWork"
                        autoComplete="expectedTypeWork"
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="targetWorkCity"
                        label="Preferowane miasto"
                        name="targetWorkCity"
                        autoComplete="targetWorkCity"
                        autoFocus
                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="expectedContractType"
                        label="Typ kontraktu"
                        name="expectedContractType"
                        autoComplete="expectedContractType"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="expectedSalary"
                        label="Oczekiwane wynagrodzenie netto"
                        name="expectedSalary"
                        autoComplete="expectedSalary"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="canTakeApprenticeship"
                        label="Zgoda na odbycie bezpłatnych praktyk/stażu"
                        name="canTakeApprenticeship"
                        autoComplete="canTakeApprenticeship"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="monthsOfCommercialExp"
                        label="Komercyjne doświadczenie w programowaniu"
                        name="monthsOfCommercialExp"
                        autoComplete="0"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="education"
                        label="Wykształcenie"
                        name="education"
                        autoComplete="education"
                        autoFocus
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="workExperience"
                        label="Doświadczenie zawodowe"
                        name="workExperience"
                        autoComplete="workExperience"
                        autoFocus
                        multiline
                        minRows="4"
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="courses"
                        label="Kursy i certyfikaty"
                        name="courses"
                        autoComplete="courses"
                        autoFocus
                        multiline
                        minRows="4"
                    />

                    <Grid container rowSpacing={3}>

                        <Grid item xs={5} >
                            <Button
                                type="submit"
                                variant="contained"
                                onClick={() => {
                                    alert('Czy chcesz kontynuować? Po wybraniu opcji "zatrudniony" utracisz dostęp do platformy.');
                                }}
                                fullWidth
                            >
                                Zatrudniony
                            </Button>

                        </Grid>

                        <Grid item xs={2}/>

                    
                        <Grid item xs={5} >
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                            >
                                Zapisz
                            </Button>

                        </Grid>
                    
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
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

export default StudentRegistration;