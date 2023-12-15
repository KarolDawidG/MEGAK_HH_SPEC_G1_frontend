import { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AvailableStudents } from '../availableStudents/AvailableStudents';
import { TalkToStudents } from '../talkToStudents/TalkToStudents';
import { Header } from '../../header/Header';
import { SearchStudents } from '../searchPanel/SearchPanel';


export const MainHrView: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<'students' | 'conversation'>('students');


    return (
        <>
            <Header />
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box bgcolor={'#292A2B'}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={1}
                        borderColor={'#1E1E1F'}
                    >
                        <Box display="flex" alignItems="center" marginLeft={2} marginRight={3}>
                            <Typography
                                variant="h6"
                                component="div"
                                margin={2}
                                style={{
                                    cursor: 'pointer',
                                    borderBottom: selectedOption === 'students' ? '2px solid red' : 'none',
                                    padding: '0 0 8px',
                                    color: selectedOption === 'students' ? 'white' : '#CFCFCF',
                                }}
                                onClick={() => {
                                    setSelectedOption('students');
                                }}
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
                                    color: selectedOption === 'conversation' ? 'white' : '#CFCFCF',
                                }}
                                onClick={() => {
                                    setSelectedOption('conversation');
                                }}
                            >
                                Do rozmowy
                            </Typography>
                        </Box>
                    </Box>
                    <SearchStudents />

                    {selectedOption === 'students' && <AvailableStudents />}
                    {selectedOption === 'conversation' && <TalkToStudents />}
                </Box>
            </Container >
        </>
    );
};
