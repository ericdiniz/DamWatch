import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">
                        DamWatch
                    </Button>
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}>
                    <Button color="inherit" component={Link} to="/dashboard">
                        Dashboard
                    </Button>
                    <Button color="inherit" component={Link} to="/funcionarios">
                        Funcionários
                    </Button>
                </Box>

                <Button color="inherit" component={Link} to="/login">
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;