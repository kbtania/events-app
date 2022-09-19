import {
    Box, Button, CardActionArea, CardActions, CardContent, Card, CardMedia, Typography, Container,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

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
                                <LocationOnIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
                                {formattedAddress}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <CalendarTodayIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
                                {formattedDate}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link href={exploreLink}>
                            <Button size="small" variant="outlined" sx={{ color: '#E04DB0', border: '1px solid #AB46D2' }}>
                                Explore Event<ArrowForwardOutlinedIcon sx={{ fontSize: '16px', marginLeft: '5px' }} />
                            </Button>
                        </Link>

                    </CardActions>
                </Card>
            </Container>
        </Box >
    );
}

export default EventItem;