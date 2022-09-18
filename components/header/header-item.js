import { Box, Typography } from '@mui/material';

function Header() {
    return <Box p={3}>
        <Typography gutterBottom variant="h5" component="div" align="center" sx={{ color: '#AB46D2', fontWeight: '700' }}>
            EVENTS EXPLORER
        </Typography>
    </Box>
}

export default Header;