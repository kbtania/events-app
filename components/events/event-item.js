import { Box, Button, CardActionArea, CardActions, CardContent, Card, CardMedia, Typography, Container } from '@mui/material';

import Link from 'next/link';

function EventItem(props) {
    const { title, image, date, location, id } = props.event;

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <Box mt={2} mb={2}>
            <Container>
                <Card sx={{ maxWidth: 355, minHeight: 180 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            // height="180"
                            src={`/${image}`}
                            alt={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formattedAddress}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {formattedDate}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href={exploreLink}>
                            <Button size="small" variant="outlined" sx={{ color: '#E04DB0', border: '1px solid #AB46D2' }}>
                                Explore Event
                        </Button>
                        </Link>

                    </CardActions>
                </Card>
            </Container>
        </Box >
    );
}

export default EventItem;