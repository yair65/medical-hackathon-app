import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logoUri from '../assets/pictures/logo_atHO3.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    logoImg: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    containingBar: {
        height: '64px'
    },
    appBar: {
        alignItems: 'center'
    }
}

);

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.containingBar}>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <img src={logoUri} alt='atHOM' className={classes.logoImg} />
                        {/* 
                        <Typography variant="h6" component="div" sx={{
                            flexGrow: 1
                        }}>
                            AppName
                        </Typography> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ margin: '64px' }}></div>
        </>
    );
}


export default Navbar
