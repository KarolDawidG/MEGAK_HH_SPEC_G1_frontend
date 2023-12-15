import React, { useState } from 'react';
import { Container, Box, Typography, Button, Checkbox, TextField } from '@mui/material';

interface FilterProps {
    onClose: () => void;
}

export const Filter: React.FC<FilterProps> = ({ onClose }) => {
    const [experienceMonths, setExperienceMonths] = useState<number>(0);
    const [practicesAgreement, setPracticesAgreement] = useState<boolean>(false);

    const handleMonthsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10) || 0;
        setExperienceMonths(value);
    };

    const handlePracticesAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPracticesAgreement(event.target.checked);
    };

    const handleApplyFilters = () => {
        // Tutaj można dodać logikę zastosowania filtrów
        // ...

        // Po zastosowaniu filtrów, zamknij komponent
        onClose();
    };

    return (
        <Container maxWidth="xl">
            <Box
                bgcolor="#fff"
                padding={3}
                borderRadius={10}
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                width={300}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom={2}
                >
                    <Typography>Filter</Typography>
                    <Button variant="contained" color="primary" onClick={onClose}>
                        Wyczyść wszystko
                    </Button>
                </Box>

                <TextField
                    label="Ocena przejścia kursu"
                    type="number"
                    fullWidth
                    margin="normal"
                    value={experienceMonths}
                    onChange={handleMonthsChange}
                />
                <TextField
                    label="Ocena aktywności i zaangażowania na kursie"
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Ocena kodu w projekcie własnym"
                    type="number"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Ocena pracy w zespole Scrum"
                    type="number"
                    fullWidth
                    margin="normal"
                />

                <Typography>Preferowane miejsce pracy</Typography>
                <Box display="flex" flexDirection="column" marginBottom={2}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '8px' }}>
                        Praca zdalna
                    </Button>
                    <Button variant="contained" color="primary">
                        Praca w biurze
                    </Button>
                </Box>

                <Typography>Oczekiwany tryb kontraktu</Typography>
                <Box display="flex" flexDirection="column" marginBottom={2}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '8px' }}>
                        Umowa o pracę
                    </Button>
                    <Button variant="contained" color="primary" style={{ marginBottom: '8px' }}>
                        B2B
                    </Button>
                    <Button variant="contained" color="primary" style={{ marginBottom: '8px' }}>
                        Umowa zlecenie
                    </Button>
                    <Button variant="contained" color="primary">
                        Umowa o dzieło
                    </Button>
                </Box>

                <Typography>Oczekiwane wynagrodzenie miesięczne netto</Typography>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <TextField label="Od" type="text" />
                    <Typography>do</Typography>
                    <TextField label="Do" type="text" />
                </Box>

                <Typography>Zgoda na odbycie bezpłatnych praktyk/stażu na początek</Typography>
                <Box display="flex" flexDirection="column" marginBottom={2}>
                    <Checkbox
                        checked={practicesAgreement}
                        onChange={handlePracticesAgreementChange}
                    />
                    <Typography>Tak</Typography>
                    <Checkbox
                        checked={!practicesAgreement}
                        onChange={handlePracticesAgreementChange}
                    />
                    <Typography>Nie</Typography>
                </Box>

                <Typography>
                    Ilość miesięcy doświadczenia komercyjnego kandydata w programowaniu
                </Typography>
                <Box display="flex" alignItems="center" marginBottom={2}>
                    <TextField
                        type="number"
                        value={experienceMonths}
                        onChange={handleMonthsChange}
                        disabled
                    />
                    <Typography>miesięcy</Typography>
                </Box>

                <Button variant="contained" color="primary" onClick={handleApplyFilters}>
                    Zastosuj filtry
                </Button>
            </Box>
        </Container>
    );
};
