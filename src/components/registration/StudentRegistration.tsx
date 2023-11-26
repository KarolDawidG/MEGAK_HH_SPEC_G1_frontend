
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  FormControlLabel, MenuItem, Switch } from '@mui/material';
import { Link } from 'react-router-dom';

const expectedTypeWork = [

    "Brak preferencji",
    "Na miejscu",
    "Gotowość do przeprowadzki",
    "Wyłącznie zdalnie",
    "Hybrydowo",

]

const expectedContractType = [
    "Brak preferencji",
    "Tylko UoP",
    "Możliwe B2B",
    "Możliwe UZ/UoD",
    
]

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
                        required
                        fullWidth
                        id="expectedTypeWork"
                        label="Preferowane miejsce pracy"
                        name="expectedTypeWork"
                        autoComplete="expectedTypeWork"
                        autoFocus
                        select
                        defaultValue={0}
                
                        
                    >
                        {
                            expectedTypeWork.map((TypeWork, index) => {
                                return <MenuItem key={TypeWork} value={index} > {TypeWork} </MenuItem>
                            })
                        }
                    </TextField>

                
                    

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
                            required
                            fullWidth
                            id="expectedContractType"
                            label="Typ kontraktu"
                            name="expectedContractType"
                            autoComplete="expectedContractType"
                            autoFocus
                            select
                            defaultValue={0}
                        >
                            {
                                expectedContractType.map((TypeContract, index) => {
                                    return <MenuItem key={TypeContract} value={index} > {TypeContract} </MenuItem>
                                })
                            }
                        </TextField>

                 

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
  <FormControlLabel required control={<Switch name="canTakeApprenticeship" />} label="Zgoda na odbycie bezpłatnych praktyk/stażu" />
                    
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
                        multiline
                        minRows="4"
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

                        <Grid item xs={2} />


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
                            <Link to="/passwordchange">
                            <Button
                                
                                variant="contained"
                                fullWidth
                            >
                                Zmień hasło
                            </Button>
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Box>

        </Container>

    )

}

export default StudentRegistration;