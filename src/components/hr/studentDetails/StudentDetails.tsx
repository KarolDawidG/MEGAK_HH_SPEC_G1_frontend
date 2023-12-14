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
    display: 'flex',
    flexDirection: 'column',
}));

const globalTypographyStyle = {
    fontSize: '12px',
    fontWeight: 500,
    color: '#ffffff',
    lineHeight: '2',
    marginTop: 'auto',
    width: '100%'
};

const globalTypographyStyleData = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingY: 4,

};

export const StudentDetails: React.FC<{ obj: StudentInterface }> = ({ obj }) => {
    console.log('Dane otrzymane w StudentDetails:', obj);

    const getContractTypeLabel = (contractType: number): string => {
        contractType = Number(contractType);
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

    const checkGrade = (grade: number | null): number => {
        return grade ? grade : 0;
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena przejścia kursu`}</Typography>
                <Typography sx={globalTypographyStyleData}>{checkGrade(obj.courseCompletion)} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena aktywności i zaangażowania`}</Typography>
                <Typography sx={globalTypographyStyleData}>{checkGrade(obj.courseEngagemnet)} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena kodu w projekcie własnym`}</Typography>
                <Typography sx={globalTypographyStyleData}>{checkGrade(obj.projectDegree)} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Ocena pracy zespołu w Scrum`}</Typography>
                <Typography sx={globalTypographyStyleData}>{checkGrade(obj.teamProjectDegree)} / 5</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Preferowane miejsce pracy`}</Typography>
                <Typography sx={globalTypographyStyleData}>{obj.targetWorkCity}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Docelowe miasto, gdzie chce pracować kandydat`}</Typography>
                <Typography sx={globalTypographyStyleData}>{obj.targetWorkCity}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Oczekiwany typ kontraktu`}</Typography>
                <Typography sx={globalTypographyStyleData}>
                    {getContractTypeLabel(obj.expectedContractType)}
                </Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Oczekiwane wynagrodzenie miesięczne netto`}</Typography>
                <Typography sx={globalTypographyStyleData}>{obj.expectedSalary}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Zgoda na staż:`}</Typography>
                <Typography sx={globalTypographyStyleData}>{obj.canTakeApprenticeship ? 'Tak' : 'Nie'}</Typography>
            </StyledGridItem>
            <StyledGridItem item xs={12}>
                <Typography sx={globalTypographyStyle}>{`Doświadczenie w programowaniu komercyjnym:`}</Typography>
                <Typography sx={globalTypographyStyleData}>{obj.monthsOfCommercialExperience} miesięcy</Typography>
            </StyledGridItem>
        </Box>
    );
};
