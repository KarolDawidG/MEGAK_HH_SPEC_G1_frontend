import React from "react";
import {roleEnum} from "../../interfaces/UserInterface";
import {Container, CssBaseline} from "@mui/material";

interface Props {
    role: roleEnum;
}

export const MainPage = (props: Props) => {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {props.role === roleEnum.student &&
                <>Jesteś student</>
            }
            {props.role === roleEnum.hr &&
                <>Jesteś Toby (lub Holly) ;) Dla niewtajemniczonych: po prostu typem z HR'u.</>
            }
            {props.role === roleEnum.admin &&
                <>Jesteś admin</>
            }
        </Container>
    )
}