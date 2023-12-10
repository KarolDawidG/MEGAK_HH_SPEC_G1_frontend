import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';

const StyledGridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: '#232324',
    padding: theme.spacing(2),
    marginRight: theme.spacing(0.1),
    height: '150px',
    width: 'auto',
}));

export interface StudentDetailsProps {
    id: string;
    firstName: string;
    lastName: string;
    courseCompletionRating: string;
    engagementRating: string;
    codeRating: string;
    teamWorkRating: string;
    preferredWorkLocation: string;
    desiredCity: string;
    expectedContractType: string;
    expectedMonthlySalary: string;
    internshipAgreement: boolean;
    commercialProgrammingExperience: string;
}


export const StudentDetails: React.FC<{ obj: StudentDetailsProps }> = ({ obj }) => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena przejścia kursu:`}</Typography>
            <Typography>{obj.courseCompletionRating}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena aktywności i zaangażowania:`}</Typography>
            <Typography>{obj.engagementRating}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena kodowania:`}</Typography>
            <Typography>{obj.codeRating}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena pracy zespołowej:`}</Typography>
            <Typography>{obj.teamWorkRating}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Preferowane miejsce pracy:`}</Typography>
            <Typography>{obj.preferredWorkLocation}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Żądane miasto:`}</Typography>
            <Typography>{obj.desiredCity}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Oczekiwany typ kontraktu:`}</Typography>
            <Typography>{obj.expectedContractType}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Oczekiwana miesięczna pensja:`}</Typography>
            <Typography>{obj.expectedMonthlySalary}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Zgoda na staż:`}</Typography>
            <Typography>{obj.internshipAgreement ? 'Tak' : 'Nie'}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Doświadczenie w programowaniu komercyjnym:`}</Typography>
            <Typography>{obj.commercialProgrammingExperience}</Typography>
        </StyledGridItem>
    </Box>
);
