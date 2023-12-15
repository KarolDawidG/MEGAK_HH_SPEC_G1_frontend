import axios from "axios";
import { notify } from "../../utils/Notify";
import { Box, Button, Container, CssBaseline, Grid, Link, styled } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { workTypeEnum } from "../../../types/StudentInterface";
import { useState } from "react";
import { useAvatarEffect } from "../../../hooks/useAvatarEffect";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const StyledGridItem = styled(Grid)(({ theme }) => ({
    backgroundColor: '#222324',
    padding: theme.spacing(2),
    marginRight: theme.spacing(0.1),
    height: '150px',
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
}));
const globalTypographyStyle = {
    fontSize: '14px',
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
const StyledBox = {
    padding: 2.5,
    fontSize: 16,
    lineHeight: 1.7,

};

const CategoryStyledBox = {
    alignItems: "left",
    bgcolor: "#292A2B",
    padding: 2,
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: "1.25px",
}


const StudentCvDetails = (obj) => {

    const [user, setUser] = useState<string>('');
    const [avatarSrc, setAvatarSrc] = useState<string>('/default_user_icon');
    const [gitLogin, setGitLogin] = useState<string>('');

    const showCv = async (event: React.FormEvent<HTMLFormElement>) => {


        try {
            const response = await axios.post(`http://localhost:3001/studentcv`, {
            });
            console.log(response.data.message);
            notify("Podgląd CV");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                notify(error.response.data.message);
            } else {
                notify("Wystąpił problem. Spróbuj ponownie.");
            }
        }
    };


    // Użyj hooka useAvatarEffect
    useAvatarEffect({ github: gitLogin, setAvatarSrc });

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


        <Container component="main" maxWidth="xl">

            <CssBaseline />
            <Grid container >
                <Grid item xs={2}> <Box
                    border={0}
                    padding={1}
                    display="flex"
                    flexDirection="column"
                    minWidth={104}
                >

                    <Box border={0}
                        padding={2}
                        flexDirection="column">
                        <ArrowBackIosIcon />
                        Wróć
                    </Box>


                    <Box
                        border={0}
                        padding={2}
                        bgcolor={"#292A2B"}
                        alignItems={"center"}
                    ><Grid container rowSpacing={1.5} >
                            <Grid item xs={12}
                                display="flex"
                                alignItems="center"

                            >
                                <Avatar alt="User Avatar" src={avatarSrc} sx={{ height: '100px', width: '100px', margin: 'auto' }} />
                            </Grid>
                            <Grid item xs={12}
                                textAlign="center"
                                fontSize={24}
                            >
                                Jan Kowalski
                            </Grid>
                            <Grid item xs={12}
                                textAlign="center"
                                fontSize={16}
                            >
                                <Link color={"#0b8bd4"} display="flex"
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                >
                                    <GitHubIcon />
                                    jankowalski  </Link>

                            </Grid>
                            <Grid item color={"#4d4d4d"} > <PhoneIcon /> +48 999999999</Grid>
                            <Grid item color={"#4d4d4d"} > <EmailIcon /> jankowalski@gmail.com </Grid>
                            <Grid item color={"#4d4d4d"} fontSize={16} fontWeight={"bold"}>
                                O mnie
                            </Grid>
                            <Box fontSize={16} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>

                            <Grid item xs={12} >
                                <Button fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Brak zainteresowania

                                </Button>

                            </Grid>

                            <Grid item xs={12} >
                                <Button fullWidth
                                    variant="contained"
                                    color="primary" >
                                    Zatrudniony
                                </Button>
                            </Grid>

                        </Grid>

                    </Box>
                </Box>
                </Grid>

                <Grid item xs={9}>
                    <Box
                        key="d"
                        borderColor={'#1E1E1F'}
                    >
                        <Box
                            border={0}
                            padding={2}
                            display="flex"
                            flexDirection="column"
                        ><Box
                            sx={CategoryStyledBox}
                        >Oceny</Box>
                            <Box
                                display="flex"
                                width="100%">
                                <StyledGridItem >
                                    <Typography sx={globalTypographyStyle}>{`Ocena przejścia kursu`}</Typography>
                                    <Typography sx={globalTypographyStyleData}>{obj.courseCompletion} / 5</Typography>
                                </StyledGridItem>
                                <StyledGridItem >
                                    <Typography sx={globalTypographyStyle}>{`Ocena aktywności i zaangażowania`}</Typography>
                                    <Typography sx={globalTypographyStyleData}>{obj.courseEngagemnet} / 5</Typography>
                                </StyledGridItem>
                                <StyledGridItem >
                                    <Typography sx={globalTypographyStyle}>{`Ocena kodu w projekcie własnym`}</Typography>
                                    <Typography sx={globalTypographyStyleData}>{obj.projectDegree} / 5</Typography>
                                </StyledGridItem>
                                <StyledGridItem >
                                    <Typography sx={globalTypographyStyle}>{`Ocena pracy zespołu w Scrum`}</Typography>
                                    <Typography sx={globalTypographyStyleData}>{obj.teamProjectDegree} / 5</Typography>
                                </StyledGridItem>
                            </Box>

                            <Box
                                sx={CategoryStyledBox}

                            >Oczekiwania w stosunku do zatrudnienia</Box>
                            <Box
                                display="flex"
                                width="100%"
                            >
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


                            <Box
                                sx={CategoryStyledBox}

                            >Edukacja</Box>
                            <Box sx={StyledBox} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>
                            <Box
                                sx={CategoryStyledBox}
                            >Kursy</Box>
                            <Box sx={StyledBox} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>
                            <Box
                                sx={CategoryStyledBox}

                            >Doświadczenie zawodowe</Box>
                            <Box sx={StyledBox} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>
                            <Box
                                sx={CategoryStyledBox}

                            >Portfolio</Box>
                            <Box sx={StyledBox} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>
                            <Box
                                sx={CategoryStyledBox}

                            >Projekt w zespole Scrumowym</Box>
                            <Box sx={StyledBox} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, quia! Officiis perspiciatis porro repellendus voluptas vel quia quis quibusdam soluta fugiat ipsum eos, possimus quasi quidem modi nesciunt quod explicabo.
                            </Box>
                            <Box
                                sx={CategoryStyledBox}

                            >Projekt na zaliczenie</Box>
                            <Box
                                sx={StyledBox}
                            >
                                <Link color="#0b8bd4"  > <AttachFileIcon />https://mui.com/material-ui/customizationjjj/ </Link>

                            </Box>
                        </Box>
                    </Box>



                </Grid>

            </Grid>

        </Container >


    )

}

export default StudentCvDetails