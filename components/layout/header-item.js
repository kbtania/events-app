import Link from 'next/link';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = ['All Events'];

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent", color: '#E04DB0', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#E04DB0',
                            textDecoration: 'none',
                        }}
                    >
                        EVENTS EXPLORER
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, color: '#E04DB0', display: 'block' }}
                            >
                                <Link href='events'>
                                    {page}
                                </Link>

                            </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Header;
