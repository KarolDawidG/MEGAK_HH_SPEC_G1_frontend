import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material';
import { StudentInterface, workTypeEnum } from '../../../types/StudentInterface';


const StyledGridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: '#232324',
    padding: theme.spacing(2),
    marginRight: theme.spacing(0.1),
    height: '150px',
    width: 'auto',
}));

const globalTypographyStyle = {
    fontSize: '16px',
    fontWeight: 500,
    color: '#ffffff',
};

export const StudentDetails: React.FC<{ obj: StudentInterface }> = ({ obj }) => {
    console.log('Dane otrzymane w StudentDetails:', obj);

    const getContractTypeLabel = (contractType: workTypeEnum): string => {
        switch (contractType) {
            case workTypeEnum.noPreferences:
                return 'Brak preferencji';
            case workTypeEnum.onSite:
                return 'Na miejscu';
            case workTypeEnum.relocation:
                return 'Relokacja';
            case workTypeEnum.remote:
                return 'Zdalnie';
            case workTypeEnum.hybrid:
                return 'Hybrydowo';
            default:
                return 'Nieznany typ kontraktu';
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena przejścia kursu`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.courseCompletion} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena aktywności i zaangażowania`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.courseEngagemnet} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena kodu w projekcie własnym`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.projectDegree} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena pracy zespołu w Scrum`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.teamProjectDegree} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Preferowane miejsce pracy`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.targetWorkCity}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Docelowe miasto, gdzie chce pracować kandydat`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.targetWorkCity}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Oczekiwany typ kontraktu`}</Typography>
                <Typography sx={globalTypographyStyle}>
                    {getContractTypeLabel(obj.expectedContractType)}
                </Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Oczekiwane wynagrodzenie miesięczne netto`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.expectedSalary}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Zgoda na staż:`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.canTakeApprenticeship ? 'Tak' : 'Nie'}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Doświadczenie w programowaniu komercyjnym:`}</Typography>
                <Typography sx={globalTypographyStyle}>{obj.monthsOfCommercialExperience}</Typography>
            </StyledGridItem>
        </Box>
    );
};
