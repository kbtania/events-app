import Link from 'next/link';

import styles from '../../styles/header.module.css';


const Header = () => {
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static" sx={{ backgroundColor: "transparent", color: '#E04DB0', boxShadow: 'none' }}>
        //         <Container maxWidth="xl">
        //             <Toolbar disableGutters>
        //                 <Typography
        //                     variant="h6"
        //                     noWrap
        //                     component="a"
        //                     href="/"
        //                     sx={{
        //                         mr: 2,
        //                         display: { xs: 'none', md: 'flex' },
        //                         fontFamily: 'monospace',
        //                         fontWeight: 700,
        //                         letterSpacing: '.3rem',
        //                         color: '#E04DB0',
        //                         textDecoration: 'none',
        //                     }}
        //                 >
        //                     EVENTS EXPLORER
        //             </Typography>
        //                 <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        //                     {pages.map((page) => (
        //                         <Button
        //                             key={page}
        //                             sx={{ my: 2, color: '#E04DB0', display: 'block' }}
        //                         >
        //                             <Link href='events'>
        //                                 {page}
        //                             </Link>

        //                         </Button>
        //                     ))}
        //                 </Box>


        //             </Toolbar>
        //         </Container>
        //     </AppBar >
        // </Box>
        <div className={styles.header}>
            <div className={styles.logo}><Link href="/">EVENTS EXPLORER</Link></div>
            <div className={styles.menuItem}><Link href="/events">All events</Link></div>
        </div>
    );
};
export default Header;
