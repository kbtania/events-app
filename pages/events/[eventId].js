import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

function EventDetailPage(props) {
    const event = props.selectedEvent;
    if (!event) {
        console.log('FALSE')
        return <h1 className='center pink'>No Event Found</h1>
    }
    return <div>
        <img src={`/${event.image}`} alt={event.title} />
        <h1>{event.title}</h1>
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