'use client';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";

// styed-component
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    border: '1px solid #666',
    color: 'black',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            // width: '20ch',
            width: '400px',
        },
    },
}));

export default function AppHeader() {
    const { data: session } = useSession();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                {/* Link này là component của next nên phải dùng style, còn sx là của MUI */}
                <Link href="/profile"
                    style={{
                        color: 'unset',
                        textDecoration: 'unset'
                    }}>Profile</Link>
            </MenuItem>
            <MenuItem onClick={() => {
                handleMenuClose();
                signOut();
            }}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {session
                ? [
                    <MenuItem key="playlist">
                        <Link href="/playlist" style={{ color: 'unset', textDecoration: 'unset' }}>
                            Playlists
                        </Link>
                    </MenuItem>,

                    <MenuItem key="like">
                        <Link href="/like" style={{ color: 'unset', textDecoration: 'unset' }}>
                            Likes
                        </Link>
                    </MenuItem>,

                    <MenuItem key="upload">
                        <Link href="/upload" style={{ color: 'unset', textDecoration: 'unset' }}>
                            Upload
                        </Link>
                    </MenuItem>,

                    <MenuItem key="avatar" onClick={handleProfileMenuOpen}>
                        <Avatar>CBZ</Avatar>
                    </MenuItem>,
                ]
                : [
                    <MenuItem key="login">
                        <Link
                            href={"auth/signin"}
                            // onClick={() => signIn()}
                            style={{ textDecoration: 'unset', color: 'unset' }}
                        >
                            Login
                        </Link>
                    </MenuItem>,
                ]}
        </Menu>
    );

    const handleRedirectHome = () => {
        router.push('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    // backgroundImage: "linear-gradient(to right, #ff9aef, #fedac1, #d5e1cf, #b7e6d9)",
                    // backgroundColor: "#b7e6d9",
                    // backgroundRepeat: "no-repeat"
                    // backgroundColor: '#9ccfff',
                    background: `
                            linear-gradient(
                                to bottom,
                                rgba(0,0,0,0.2),
                                rgba(0,0,0,0.01)
                            )
                            `,
                }}
            >
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                mr: 2,
                                display: { xs: 'block', sm: 'none' }, cursor: 'pointer',
                                color: 'black'
                            }}
                            onClick={() => router.push('/')}
                        >
                            SC Clone
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' }, cursor: 'pointer', color: 'black', fontWeight: 500 }}
                            onClick={() => handleRedirectHome()}
                        >
                            SoundCloud Clone
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: "20px",
                            alignItems: 'center',
                            cursor: 'pointer',

                            "> a": {
                                color: 'unset',
                                textDecoration: 'unset'
                            }
                        }}>
                            {
                                session
                                    ?
                                    <>
                                        <Link href="/playlist" style={{
                                            color: 'black',
                                            fontWeight: 500,
                                            textDecoration: 'unset'
                                        }}>Playlists</Link>
                                        <Link href="/like" style={{
                                            color: 'black',
                                            fontWeight: 500,
                                            textDecoration: 'unset'
                                        }}>Likes</Link>
                                        <Link href="/upload" style={{
                                            color: 'black',
                                            fontWeight: 500,
                                            textDecoration: 'unset'
                                        }}>Upload</Link>
                                        <Avatar
                                            onClick={handleProfileMenuOpen}
                                            sx={{
                                                // backgroundImage: "linear-gradient(to bottom, #ff9aef, #fedac1, #d5e1cf, #b7e6d9)",
                                                // backgroundColor: "#b7e6d9",
                                                // backgroundRepeat: "no-repeat",
                                                // fontWeight: 500,
                                                backgroundColor: 'transparent',
                                                border: '1px solid #000',
                                                color: '#000'
                                            }}
                                        >
                                            CBZ
                                        </Avatar>
                                    </>
                                    :
                                    <>
                                        <Link
                                            href={"auth/signin"}
                                            // onClick={() => signIn()}
                                            style={{ border: "1px solid #000", padding: "4px 10px", color: 'black', fontWeight: 500, textDecoration: 'unset' }}
                                        >
                                            Login
                                        </Link>
                                    </>
                            }

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                                sx={{ color: 'black' }}
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
