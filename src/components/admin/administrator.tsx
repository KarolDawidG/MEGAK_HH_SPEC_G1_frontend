import {Container, CssBaseline} from "@mui/material"
import {CSVForm} from "./forms/CsvForm"
import {HRForm} from "./forms/HRForm"
import { Header } from "../header/Header"

export const Administrator = () => {
    return <>
        <Header />
        <Container component="main" maxWidth="xs" >
        <CssBaseline />
            <CSVForm/>
            <HRForm/>
        </Container>
    </>
}

