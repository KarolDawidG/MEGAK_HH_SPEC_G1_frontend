import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StudentDetails, StudentDetailsProps } from '../studentDetails/StudentDetails';
import axios from 'axios';
import { URL_AVAILABLE_STUDENTS } from '../../utils/backend-links';
import { StudentInterface } from '../../../types/StudentInterface';
import { Container, MenuItem, Select } from '@mui/material';

export const AvailableStudents = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<StudentDetailsProps | null>(null);
    const [students, setStudents] = useState<StudentInterface[]>([]);
    const [quantityStudents, setQuantityStudents] = useState<number | null>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [allPage, setAllPage] = useState<number>(0);

    useEffect(() => {
        const fetchAvailableStudents = async () => {
            try {
                const response = await axios.get(`${URL_AVAILABLE_STUDENTS}/list?page=${itemsPerPage}`);
                if (response.status !== 200) {
                    throw new Error('Nie udało się pobrać danych');
                }
                setStudents(response.data[0]);
                setQuantityStudents(response.data[1]);
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            }
        };

        fetchAvailableStudents();
    }, [itemsPerPage]);

    const handleReserveClick = (student: StudentInterface) => {
        // Logika rezerwacji rozmowy
    };

    const handleItemsPerPageChange = (event: React.ChangeEvent<{ value: number }>) => {
        setItemsPerPage(event.target.value);
        setAllPage(quantityStudents ? quantityStudents / (event.target.value) : 0);
    };

    const handlePageChange = (newPage: number) => {
        // Logika do pobierania nowych rekordów z API dla nowej strony
        setItemsPerPage(newPage);
    };

    const handleToggleDetails = (student: AvailableStudentsProps) => {
        const studentDetails: StudentDetailsProps = {
            id: student.id,
            firstName: student.firstName,
            lastName: student.lastName,
            courseCompletionRating: '',
            engagementRating: '',
            codeRating: '',
            teamWorkRating: '',
            preferredWorkLocation: '',
            desiredCity: '',
            expectedContractType: '',
            expectedMonthlySalary: '',
            internshipAgreement: false,
            commercialProgrammingExperience: '',
        };
        setSelectedStudent(studentDetails);
        setShowDetails(!showDetails);
    };


    return (
        <Container component="main" maxWidth="xl">
            {students.map((student) => (
                <Box
                    key={student.id}
                    marginLeft={3} marginRight={3}
                    borderBottom={10} borderColor={'#1E1E1F'}
                >
                    <Box
                        border={0}
                        padding={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Box>
                                <Typography>{`${student.firstName} ${student.lastName}`}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Button variant="contained" color="primary" onClick={() => handleReserveClick(student)}>
                                    Zarezerwuj rozmowę
                                </Button>
                                <IconButton onClick={() => handleToggleDetails(student)}>
                                    {showDetails && selectedStudent?.id === student.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    {showDetails && selectedStudent?.id === student.id && <StudentDetails obj={selectedStudent} />}
                </Box>
            ))}
            <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%" marginTop={2}>
                <Typography sx={{ marginRight: 2 }}>Ilość elementów:</Typography>
                <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    {[10, 20, 30, 40, 50].map((value) => (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
                <Typography sx={{ marginRight: 2 }}>{`${itemsPerPage} z ${allPage}`}</Typography>
                <IconButton onClick={() => handlePageChange(itemsPerPage - 10)} disabled={itemsPerPage === 1}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => handlePageChange(itemsPerPage + 10)}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Box>
        </Container>
    );
};