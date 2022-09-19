import { Box, Grid, Container } from '@mui/material'

import EventItem from './event-item';

function EventList(props) {
    const { items } = props;
    return (
        <Container>
            <Box sx={{ width: '100%', flexGrow: 1 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    {
                        items.map(event => <Grid key={event.id} item xs={12} sm={12} md={4}>
                            <EventItem event={event} />
                        </Grid>)
                    }
                </Grid>
            </Box>
        </Container>
    )
}

export default EventList;
