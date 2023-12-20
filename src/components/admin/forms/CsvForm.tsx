import { Box, Button, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { ChangeEvent, useContext } from "react";
import axios from 'axios';
import { notify, notifyError } from "../../utils/Notify";
import { URL_IMPORT_USERS } from "../../utils/backend-links";
import Papa from 'papaparse';
import { AuthContext } from "../../../AuthContext";

export const CSVForm = () => {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        return <div>Loading...</div>;
    }
    const { auth } = authContext;

    const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = async () => {
                if (reader.result) {
                    const fileContent = reader.result as string;
                    try {
                        const jsonData: any = await processCsvData(fileContent);
                        await sendCsvDataToServer(jsonData);
                    } catch (error) {
                        notifyError("Błąd przetwarzania pliku CSV: " + error);
                    }
                } else {
                    notifyError("Błąd odczytu pliku: brak danych");
                }
            };

            reader.onerror = () => {
                notifyError("Błąd odczytu pliku");
            };
        }
    };

    const processCsvData = (csvData: string) => {
        return new Promise((resolve, reject) => {
            Papa.parse(csvData, {
                complete: (results) => {
                    console.log("Wyniki przetwarzania CSV:", results);
                    notify('Dane załadowane poprawnie');
                    resolve(results.data);
                },
                error: (error: Error) => {
                    notifyError("Błąd przetwarzania CSV:");
                    reject(error);
                },
                header: true,
                skipEmptyLines: true
            });
        });
    };

    const sendCsvDataToServer = async (jsonData: string) => {
        try {
            const response = await axios.post(URL_IMPORT_USERS, JSON.stringify(jsonData), {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.status === 201) {
                notify("Plik załadowany pomyślnie.");
            } else {
                notifyError(`Błąd przy ładowaniu pliku: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                notify("Błąd połączenia z serwerem: " + error.message);
            } else {
                notifyError("Wystąpił nieoczekiwany błąd!");
            }
        }
    };

    return (

        <Box marginBottom={10} width="100%">
            <Typography component="h2" variant="h5" align="center">
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

    )

}