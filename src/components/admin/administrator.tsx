import {Container, CssBaseline} from "@mui/material"
import CSVForm from "./forms/CsvForm"
import HRForm from "./forms/HRForm"

export const Administrator = () => {
    return <>
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
            <CSVForm/>
            <HRForm/>
        </Container>
    </>
}

