import { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SearchStudents } from '../searchPanel/SearchPanel';
import { Header } from '../header/Header';
import { AvailableStudents } from '../availableStudents/AvailableStudents';
import { TalkToStudents } from '../talkToStudents/TalkToStudents';

const students = [{
    id: 'daghahga',
    firstName: "Marcin",
    lastName: "Rrr",
},
{
    id: 'agaga',
    firstName: "Drugi",
    lastName: "WW",
},
{
    id: 'xdchbcsxbhn',
    firstName: "Drugi",
    lastName: "WW",
},
{
    id: 'adsgagha',
    firstName: "Drugi",
    lastName: "WW",
},
{
    id: 'sdhsh',
    firstName: "Drugi",
    lastName: "WW",
},
]




export const MainHrView = () => {
    const [selectedOption, setSelectedOption] = useState<'students' | 'conversation'>('students');

    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Box>
                <Header />
            </Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box display="flex" alignItems="center">
                    <Typography
                        variant="h6"
                        component="div"
                        margin={2}
                        style={{
                            cursor: 'pointer',
                            borderBottom: selectedOption === 'students' ? '2px solid red' : 'none',
                            padding: '0 0 8px',
                            color: selectedOption === 'students' ? 'white' : '#d2c1b3',
                        }}
                        onClick={() => setSelectedOption('students')}
                    >
                        Dostępni kursanci
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        margin={2}
                        style={{
                            cursor: 'pointer',
                            borderBottom: selectedOption === 'conversation' ? '2px solid red' : 'none',
                            padding: '0 0 8px',
                            color: selectedOption === 'conversation' ? 'white' : '#d2c1b3',
                        }}
                        onClick={() => setSelectedOption('conversation')}
                    >
                        Do rozmowy
                    </Typography>
                </Box>
            </Box>
            <SearchStudents />
            {selectedOption === 'students' && <AvailableStudents students={students} />}
            {selectedOption === 'conversation' && <TalkToStudents students={students} />}
        </Container>
    );
};
