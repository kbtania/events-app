import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

import styles from '../../styles/events.module.css';

import {
    Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Head from 'next/head';

function EventDetailPage(props) {
    const event = props.selectedEvent;
    if (!event) {
        return <h1 className='center pink'>No Event Found</h1>
    }
    const formattedAddress = event.location.replace(', ', '\n');
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return <div>
        <Head>
            <title>{event.title}</title>
        </Head>
        <h1 className={`center ${styles.main}`}>{event.title}</h1>
        <img className={styles.eventImage} src={`/${event.image}`} alt={event.title} />
        <Typography variant="body2" color="text.secondary" className="center" sx={{ margin: '20px' }}>
            <LocationOnIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
            {formattedAddress}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="center">
            <CalendarTodayIcon sx={{ fontSize: '16px', marginRight: '5px' }} />
            {formattedDate}
        </Typography>
        <p>{event.description}</p>
    </div>
}

export async function getStaticProps(context) {
    const eventId = context.params.eventId;
    const event = await getEventById(eventId);
    if (!event) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            selectedEvent: event,
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({ params: { eventId: event.id } }));
    return {
        paths: paths,
        fallback: 'blocking'
    }
}

export default EventDetailPage;