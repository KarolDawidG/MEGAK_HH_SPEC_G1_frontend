import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL_LOGOUT } from '../utils/backend-links';
import { notify } from '../utils/Notify';
import { useAvatarEffect } from '../../hooks/useAvatarEffect';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface MenuOption {
    label: string;
    route: string;
};

export const Header = () => {
    const [user, setUser] = useState<string>('Marcin R');
    const [gitLogin, setGitLogin] = useState<string>('Swichu553');
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const [avatarSrc, setAvatarSrc] = useState<string>('/default_user_icon');
    const navigate = useNavigate();


    const menuOptions: MenuOption[] = [
        { label: 'Zmień hasło', route: '/passwordchange' },
        { label: 'Wyloguj', route: '/' },
    ];

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleMenuItemClick = async (route: string) => {
        if (route === '/') {
            try {
                await axios.get(URL_LOGOUT);
            } catch (error) {
                const message = 'Błąd wylogowania';
                console.error(message);
                notify(message);
            };
        };
        navigate(route);
        notify('Wylogowany');
    };

    // Użyj hooka useAvatarEffect
    useAvatarEffect({ github: gitLogin, setAvatarSrc });


    return (
        <Container component="main" maxWidth='xl'>
            <CssBaseline />
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                minWidth="100vh"
                paddingY={2}
            >
                <Box component='image'>
                    <img src="/Megaklogo.png" alt="MegaK logo" height="50" />
                </Box>

                <Box display="flex" alignItems="center">
                    <Avatar alt="User Avatar" src={avatarSrc} />
                    <Typography variant="h6" component="div" margin={2} >
                        {user}
                    </Typography>

                    <IconButton
                        onClick={handleMenuClick}
                    >
                        <ArrowDropDownIcon />
                    </IconButton>

                    <Menu
                        id="header-menu"
                        anchorEl={menuAnchor}
                        open={Boolean(menuAnchor)}
                        onClose={handleMenuClose}
                    >
                        {menuOptions.map((option) => (
                            <MenuItem key={option.label} onClick={() => handleMenuItemClick(option.route)}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Box>
        </Container>
    );
};