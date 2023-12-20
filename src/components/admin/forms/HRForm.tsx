import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import React, { useState } from "react";
import axios from 'axios';
import { notify } from "../../utils/Notify";
import { validateEmail } from "../../utils/validation";
import { URL_ADD_HR } from "../../utils/backend-links";

export const HRForm = () => {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [company, setCompany] = useState("");
    const [maxReservedStudents, setMaxReservedStudents] = useState("");


    const formData = {
        email,
        fullName,
        company,
        maxReservedStudents: parseInt(maxReservedStudents, 10)
    };

    const formDataJSON: any = JSON.stringify(formData);


    const handleOnSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Walidacja adresu e-mail
        if (!validateEmail(email)) {
            notify("Niepoprawny email. Wpisz poprawny adres!");
            return
        }

        try {
            const response = await axios.post(URL_ADD_HR, formDataJSON, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 201) {
                notify("Dane pracownika HR zostały dodane.");
            } else {
                notify(`Błąd przy ładowaniu pliku: ${response.status} - ${response.statusText}`);
            }

        } catch (error) {
            notify("Wystąpił błąd podczas wysyłania danych.");
        }

    };


    return (
        <>
            <Typography component="h2" variant="h5" align="center" >
                Wprowadź dane pracownika HR
            </Typography>

            <Box component="form" onSubmit={handleOnSubmitForm}>
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
        </>
    )
}