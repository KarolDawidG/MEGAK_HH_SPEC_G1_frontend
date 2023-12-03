import { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, InputAdornment, InputLabel, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAlt from '@mui/icons-material/FilterAlt';




export const MenuStudents = () => {
    const [selectedOption, setSelectedOption] = useState<'students' | 'conversation'>('students');
    const [isLabelVisible, setIsLabelVisible] = useState(true);


    const handleFocus = () => {
        setIsLabelVisible(false);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            setIsLabelVisible(true);
        }
    };

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
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <TextField
                    variant="filled"
                    margin="normal"
                    id="search-field"
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ width: '500px', display: 'flex', alignItems: 'left', }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" style={{ margin: 0 }}>
                                <SearchIcon color="action"
                                    style={{ color: '#757575', alignSelf: 'center' }}
                                />
                                <InputLabel
                                    shrink={true}
                                    htmlFor="search-field"
                                    style={{ fontSize: '24px', color: '#757575', marginLeft: 8 }}
                                >
                                    {isLabelVisible ? 'Szukaj' : ''}
                                </InputLabel>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box marginLeft={2}>
                    <Button
                        variant="outlined"
                        startIcon={<FilterAlt />}
                        style={{ color: "white" }}
                    >
                        Filtrowanie
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
