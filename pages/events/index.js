import { getAllEvents } from '../../helpers/api-util';

import EventList from './../../components/events/event-list';
import EventsSearch from './../../components/events/events-search';

import { useRouter } from 'next/router';

function AllEventsPage(props) {
    const router = useRouter();

    const events = props.events;

    function findEventsHandler(year, month) {
        console.log('year = ', year)
        console.log('month = ', month)
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return <div>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
    </div>
}

export async function getStaticProps() {
    const events = await getAllEvents();
    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}

export default AllEventsPage;