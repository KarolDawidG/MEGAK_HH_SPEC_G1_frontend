import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { ChangeEvent, useState } from "react";
import axios from 'axios';
import { notify } from "../utils/Notify";
import { validateEmail } from "../utils/validation";
import { URL_ADD_HR, URL_IMPORT_USERS } from "../utils/backend-links";


const Administrator = () => {
    const [file, setFile] = useState<Blob>();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [maxReservedStudents, setMaxReservedStudents] = useState("");


    const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            const formData = new FormData();
            formData.append("file", e.target.files[0]);

            console.log(e.target.files[0]);

            const response = await axios.post(URL_IMPORT_USERS,
                formData
            );
            if (response.status === 200) {
                notify(response.data);
            }


            console.log(response.data);
            notify("Załadowano plik");

        }
    };

    const handleOnSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Walidacja adresu e-mail
        if (!validateEmail(email)) {
            notify("Niepoprawny email. Wpisz poprawny adres!");
            console.error('Incorrect email.');
            return
        }
        try {
            const res = await axios.post(URL_ADD_HR, {
                email,
                fullName,
                company,
                maxReservedStudents
            });
            if (res.status === 200) {
                notify(res.data);
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message); // Wyświetlenie wiadomości o błędzie
            } else {
                console.error('Błąd danych', error);
                notify("Wystąpił problem podczas dodawania danych.");
            }
        }
    }
    return (


        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                flexDirection='column'


            >
                <Box marginBottom={10} width="100%" component="form" >
                    <Typography component="h2" variant="h5" align="center"  >
                        Załaduj plik .csv dla kursantów.
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        fullWidth
                        component="label"

                    >

                        <input
                            type="file"
                            accept={".csv"}
                            hidden
                            onChange={handleOnChange}
                        />
                    </Button>
                </Box>


                <Box component="form" onSubmit={handleOnSubmitForm}>

                    <Typography component="h2" variant="h5" align="center" >
                        Wprowadź dane pracownika HR
                    </Typography>
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
                        required
                        fullWidth
                        id="fullName"
                        label="Imię i Nazwisko"
                        name="fullName"
                        autoComplete="fullName"
                        autoFocus
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="company"
                        label="Firma"
                        name="company"
                        autoComplete="company"
                        autoFocus
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <TextField
                        variant="filled"
                        size="small"
                        margin="normal"
                        required
                        fullWidth
                        id="maxReservedStudents"
                        label="Max. liczba osób do rozmowy"
                        name="maxReservedStudents"
                        autoComplete="0"
                        autoFocus
                        type='number'
                        inputProps={{ min: 0, max: 999 }}
                        value={maxReservedStudents}
                        onChange={(e) => setMaxReservedStudents(e.target.value)}
                    />
                </Box>

                <Grid container rowSpacing={4}>

                    <Grid item xs={12} >
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                        >
                            Zapisz
                        </Button>

                    </Grid>
                </Grid>
            </Box>
        </Container>

    )

}

export default Administrator;