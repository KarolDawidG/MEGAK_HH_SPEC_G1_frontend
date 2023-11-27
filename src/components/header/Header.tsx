import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
    const [user, setUser] = useState<string>("Marcin R");
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();


    const menuOptions: MenuOption[] = [
        { label: 'Zmień hasło', route: '/changepassword' },
        { label: 'Wyloguj', route: '/logout' },
    ];

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    const handleMenuItemClick = async (route: string) => {
        if (route === '/logout') {
            try {
                await axios.post('http://example.com/logout');
            } catch (error) {
                console.error('Błąd wylogowania', error);
            }
        };
        navigate(route);
    };

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
                    <Avatar alt="User Avatar" src="/user_avatar.jpg" />
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