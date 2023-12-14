import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StudentDetails } from '../studentDetails/StudentDetails';
import axios from 'axios';
import { URL_AVAILABLE_STUDENTS } from '../../utils/backend-links';
import { StudentInterface, StudentInterfaceMain } from '../../../types/StudentInterface';
import { Avatar, Container, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';


export const TalkToStudents = () => {
    const [expandedStudents, setExpandedStudents] = useState<string[]>([]);
    const [page, setPage] = useState<number>(1);
    const [students, setStudents] = useState<StudentInterface[]>([]);
    const [quantityStudents, setQuantityStudents] = useState<number | null>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);


    useEffect(() => {
        const fetchAvailableStudents = async () => {
            try {
                const response = await axios.get(`${URL_AVAILABLE_STUDENTS}/list?page=${page}&pitems=${itemsPerPage}`, {
                    withCredentials: true,
                });
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

    const handleShowCV = () => {
        // Logika obsługi pokazywania CV
    };

    const handleNoInterest = () => {
        // Logika obsługi braku zainteresowania
    };

    const handleHired = () => {
        // Logika obsługi zatrudnienia
    };

    const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
        const newValue = event.target.value as number;
        setItemsPerPage(newValue);
        setPage(1);
    };


    const handlePageChange = (newPage: number) => {
        setPage(page + newPage);
    };

    const handleToggleDetails = (student1: StudentInterfaceMain) => {
        if (!student1 || student1.userId === undefined) {
            return;
        }

        const studentId = student1.userId;
        const isExpanded = expandedStudents.includes(studentId);

        const newExpandedStudents = isExpanded
            ? expandedStudents.filter((userId) => userId !== studentId)
            : [...expandedStudents, studentId];

        setExpandedStudents(newExpandedStudents);
    };

    const quantityStudentView = () => {
        const viewList = itemsPerPage * page;
        return (viewList > ((quantityStudents) ? quantityStudents : 0)) ? quantityStudents : viewList;
    };


    return (
        <Container component="main" maxWidth="xl">
            {students.map((student) => (
                <Box
                    key={student.userId}
                    marginLeft={3}
                    marginRight={3}
                    borderBottom={10}
                    borderColor={'#1E1E1F'}
                >
                    <Box
                        border={0}
                        padding={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                    >
                        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                            <Box display="flex" gap={4}>
                                <Box>
                                    <Typography style={{ fontSize: '0.8rem' }}>{`Rezerwacja do`}</Typography>
                                    <Typography variant="h6" style={{ fontSize: '1.2rem' }}>{`06.12.2023 r.`}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Avatar alt="User Avatar" src={`https://github.com/swichu553.png`} />
                                    <Typography >{`${student.firstName} ${student.lastName}`}</Typography>
                                </Box>

                            </Box>
                            <Box display="flex" gap={2}>
                                <Button variant="contained" color="primary" onClick={() => handleShowCV()}>
                                    Pokaż CV
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => handleNoInterest()}>
                                    Brak zainteresowania
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => handleHired()}>
                                    Zatrudniony
                                </Button>
                                <IconButton onClick={() => handleToggleDetails(student)}>
                                    {expandedStudents.includes(student.userId) ? (
                                        <ExpandLessIcon />
                                    ) : (
                                        <ExpandMoreIcon />
                                    )}
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    {expandedStudents.includes(student.userId) && (
                        <StudentDetails obj={student} />
                    )}
                </Box>
            ))}
            <Box display="flex" alignItems="center" justifyContent="flex-end" width="100%" marginTop={2}>
                <Typography sx={{ marginRight: 2 }}>Ilość elementów:</Typography>
                <Select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                    {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((value) => (
                        <MenuItem key={value} value={value}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
                <Typography sx={{ marginRight: 2 }}>{`${quantityStudentView()} z ${quantityStudents}`}</Typography>
                <IconButton onClick={() => handlePageChange(-1)} disabled={page === 1}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <IconButton onClick={() => handlePageChange(1)} disabled={quantityStudentView() === quantityStudents}>
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Box>
        </Container>
    );
};
