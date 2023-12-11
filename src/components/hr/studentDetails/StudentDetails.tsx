import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';
import { StudentInterface } from '../../../types/StudentInterface';

const StyledGridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: '#232324',
    padding: theme.spacing(2),
    marginRight: theme.spacing(0.1),
    height: '150px',
    width: 'auto',
}));


export const StudentDetails: React.FC<{ obj: StudentInterface }> = ({ obj }) => (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
    >
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena przejścia kursu`}</Typography>
            <Typography>{obj.courseCompletion}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena aktywności i zaangażowania`}</Typography>
            <Typography>{obj.courseEngagemnet}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena kodu w projekcie własnym`}</Typography>
            <Typography>{obj.projectDegree}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Ocena pracy zespole w Scrum`}</Typography>
            <Typography>{obj.teamProjectDegree}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Preferowane miejsce pracy`}</Typography>
            <Typography>{obj.targetWorkCity}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Docelowe miasto, gdzie chce pracować kandydat`}</Typography>
            <Typography>{obj.targetWorkCity}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Oczekiwany typ kontraktu`}</Typography>
            <Typography>{obj.expectedContractType}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Oczekiwane wynagrodzenie miesięczne netto`}</Typography>
            <Typography>{obj.expectedSalary}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Zgoda na staż:`}</Typography>
            <Typography>{obj.canTakeApprenticeship ? 'Tak' : 'Nie'}</Typography>
        </StyledGridItem>
        <StyledGridItem item xs={12}>
            <Typography>{`Doświadczenie w programowaniu komercyjnym:`}</Typography>
            <Typography>{obj.monthsOfCommercialExperience}</Typography>
        </StyledGridItem>
    </Box>
);
