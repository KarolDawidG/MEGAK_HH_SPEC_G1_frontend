import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import FilterAlt from '@mui/icons-material/FilterAlt';
import { Container, CssBaseline } from '@mui/material';



export const SearchStudents = () => {
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
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <TextField
                    variant="filled"
                    margin="normal"
                    id="search-field"
                    autoComplete="off"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{ width: '350px', height: 'auto', display: 'flex', alignItems: 'left' }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" style={{ margin: 0 }}>
                                <SearchIcon color="action" style={{ color: '#757575', alignSelf: 'center' }} />
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
                    <Button variant="outlined" startIcon={<FilterAlt />} style={{ color: 'white' }}>
                        Filtrowanie
                    </Button>
                </Box>
            </Box>
        </Container>

    );
};


