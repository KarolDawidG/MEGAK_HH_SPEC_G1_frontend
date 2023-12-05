    import { Box, Button, Typography } from "@mui/material"
    import CloudUploadIcon from '@mui/icons-material/CloudUpload'
    import { ChangeEvent, useContext } from "react";
    import axios from 'axios';
    import { notify } from "../../utils/Notify";
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
        
                        console.log("Zawartość pliku:", fileContent);
                        console.log(`Autentykacja: ${auth?.id}`) // context dziala dziala poprawnie
                        try {
                            const jsonData = await processCsvData(fileContent);
                            await sendCsvDataToServer(jsonData);
                        } catch (error) {
                            notify("Błąd przetwarzania pliku CSV: " + error);
                            console.error('Błąd:', error);
                        }
                    } else {
                        notify("Błąd odczytu pliku: brak danych");
                        console.error("Błąd odczytu pliku: brak danych");
                    }
                };
        
                reader.onerror = () => {
                    notify("Błąd odczytu pliku");
                    console.error("Error reading file");
                };
            }
        };
        
        const processCsvData = (csvData: string) => {
            return new Promise((resolve, reject) => {
                Papa.parse(csvData, {
                    complete: (results) => {
                        console.log("Wyniki przetwarzania CSV:", results); 
                        resolve(results.data);
                    },
                    error: (error: Error) => {
                        console.error("Błąd przetwarzania CSV:", error);
                        reject(error);
                    },
                    header: true,
                    skipEmptyLines: true 
                });
            });
        };
        
        const sendCsvDataToServer = async ({jsonData}:any) => {
            try {
                const response = await axios.post(URL_IMPORT_USERS, jsonData, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                if (response.status === 200) {
                    notify("Plik załadowany pomyślnie: " + response.data);
                } else {
                    notify(`Błąd przy ładowaniu pliku: ${response.status} - ${response.statusText}`);
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    notify("Błąd połączenia z serwerem: " + error.message);
                } else {
                    notify("Wystąpił nieoczekiwany błąd!");
                }
                console.error('Błąd:', error);
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