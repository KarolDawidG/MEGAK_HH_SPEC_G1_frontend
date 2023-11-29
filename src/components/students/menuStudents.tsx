import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';



export const MenuStudents = () => {
    const [user, setUser] = useState<string>('Marcin R');

    return (
        <Container component="main" maxWidth='xl'>
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                minWidth="100vh"
                paddingY={2}
            >
                <Box display="flex" alignItems="center">
                    <Typography variant="h6" component="div" margin={2} >
                        Dostępni kursanci
                    </Typography>
                    <Typography variant="h6" component="div" margin={2} >
                        Do rozmowy
                    </Typography>

                </Box>

            </Box>
        </Container>
    );
};