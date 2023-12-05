import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { StudentDetails, StudentDetailsProps } from '../studentDetails/StudentDetails';

export type AvailableStudentsProps = {
    id: string;
    firstName: string;
    lastName: string;
};

type AvailableStudentsComponentProps = {
    students: AvailableStudentsProps[];
};

export const TalkToStudents: React.FC<AvailableStudentsComponentProps> = ({ students }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<StudentDetailsProps | null>(null);
    const [showCV, setShowCV] = useState(false);


    const handleShowCV = () => {
        // Logika obsługi pokazywania CV
        setShowCV(true);
    };

    const handleNoInterest = () => {
        // Logika obsługi braku zainteresowania
    };

    const handleHired = () => {
        // Logika obsługi zatrudnienia
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
        <>
            {students.map((student) => (
                <Box
                    key={student.id}
                    border={0}
                    padding={2}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    borderBottom={5}
                >
                    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
                        <Box>
                            <Typography variant="h6">{`${student.firstName} ${student.lastName}`}</Typography>
                        </Box>
                        <Box display="flex" gap={1}>
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
                                {showDetails && selectedStudent?.id === student.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                            </IconButton>
                        </Box>
                    </Box>
                    {showDetails && selectedStudent?.id === student.id && <StudentDetails obj={selectedStudent} />}
                </Box>
            ))}
        </>
    )
};
