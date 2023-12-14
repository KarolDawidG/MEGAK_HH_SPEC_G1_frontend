import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControlLabel, MenuItem, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { notify } from "../utils/Notify";
import { expectedTypeWorkEnum, expectedContractTypeEnum} from './enum'
import { validatePortfolioUrls, validateEmail, validatePhone, validateExpectedSalary, validatemonthsOfCommercialExp, validateGithub} from '../utils/validation';

const StudentRegistration = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [github, setGithub] = useState("");
    const [portfolioUrls, setPortfolioUrls] = useState("");
    const [projectUrls, setProjectUrls] = useState("");
    const [bio, setBio] = useState("");
    const [expectedTypeWork, setExpectedTypeWork] = useState(0);
    const [targetWorkCity, setTargetWorkCity] = useState("");
    const [expectedContractType, setExpectedContractType] = useState(0);
    const [expectedSalary, setExpectedSalary] = useState("");
    const [canTakeApprenticeship, setCanTakeApprenticeship] = useState("false");
    const [monthsOfCommercialExp, setMonthsOfCommercialExp] = useState(0);
    const [education, setEducation] = useState("");
    const [workExperience, setWorkExperience] = useState("");
    const [courses, setCourses] = useState("");

    const formData = {
        email,
        phone,
        name,
        lastname,
        github,
        portfolioUrls,
        projectUrls,
        bio,
        expectedTypeWork,
        targetWorkCity,
        expectedContractType,
        expectedSalary,
        canTakeApprenticeship,
        monthsOfCommercialExp,
        education,
        workExperience,
        courses
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Walidacja adresu e-mail
        if (!validateEmail(email)) {
            notify("Niepoprawny email. Wpisz poprawny adres!");
            console.error('Incorrect email.');
        }

        if (!validatePhone(phone)) {
            notify("Niepoprawny numer telefonu");
            console.error('Incorrect phone number.');

        }
         //Walidacja URL portfolio
         if (!validatePortfolioUrls(portfolioUrls)) {
            notify("Niepoprawny url dla portfolio");
            console.error('Incorrect portfolio URL.');
        }

        //Walidacja github
        if (!validateGithub(github)) {
            notify("Niepoprawny numer user Github");
            console.error('Incorrect Github user.');
        }
        //Walidacja miesiace doswiadczenia
        if (!validatemonthsOfCommercialExp(monthsOfCommercialExp)) {
            notify("Niepoprawna wartiść dla miesięcy");
            console.error('Incorrect commercial experiecne.');
        }
        // Walidacja oczekiwane wynagrodzenie
        if (!validateExpectedSalary(expectedSalary)) {
            notify("Niepoprawny kwota oczekiwanego wynagrodzenia");
            console.error('Incorrect salary amount.');
        }

        console.log(formData)
    }  


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
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Numer tel"
                        name="phone"
                        type="tel"
                        autoComplete="phone"
                        autoFocus
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
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
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
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
                        type={'url'}
                        value={portfolioUrls}
                        onChange={(e) => setPortfolioUrls(e.target.value)}
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
                        type={'url'}
                        value={projectUrls}
                        onChange={(e) => setProjectUrls(e.target.value)}
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
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
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
                        value={expectedTypeWork}
                        onChange={(e) => setExpectedTypeWork(Number(e.target.value))}


                    >
                        {
                            expectedTypeWorkEnum.map((TypeWork, index) => {
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
                        value={targetWorkCity}
                        onChange={(e) => setTargetWorkCity(e.target.value)}
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
                        value={expectedContractType}
                        onChange={(e) => setExpectedContractType(Number(e.target.value))}
                    >
                        {
                            expectedContractTypeEnum.map((TypeContract, index) => {
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
                        label="Oczekiwane wynagrodzenie netto (PLN)"
                        name="expectedSalary"
                        autoComplete="expectedSalary"
                        autoFocus
                        value={expectedSalary}
                        onChange={(e) => setExpectedSalary(e.target.value)}
                    />
                    <FormControlLabel control={<Switch
                        name="canTakeApprenticeship"
                        value={canTakeApprenticeship}
                        onChange={(e) => setCanTakeApprenticeship(e.target.value)}
                    />} label="Zgoda na odbycie bezpłatnych praktyk/stażu" />

                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="monthsOfCommercialExp"
                        label="Komercyjne doświadczenie w programowaniu (w msc)"
                        name="monthsOfCommercialExp"
                        autoComplete="0"
                        autoFocus
                        type='number'
                        inputProps={{ min: 0 }}
                        value={monthsOfCommercialExp}
                        onChange={(e) => setMonthsOfCommercialExp(Number(e.target.value))}
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
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
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
                        value={workExperience}
                        onChange={(e) => setWorkExperience(e.target.value)}
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
                        value={courses}
                        onChange={(e) => setCourses(e.target.value)}
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