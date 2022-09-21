import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../helpers/api-util';

import EventList from './../../components/events/event-list';
import EventDate from './../../components/events/event-date';

function FilteredEventsPage(props) {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return <h1 className="center pink">Loading...</h1>
    }
    if (filterData.length !== 2 || !props.events) {
        return <h1 className="center pink">Could not find any event. Check URL please</h1>
    }

    const date = new Date(props.date.year, props.date.month - 1);
    return <div>
        <EventDate date={date} />
        <EventList items={props.events} />
    </div>
}

export async function getServerSideProps(context) {
    const { params } = context;
    const filterData = params.slug;
    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];
    const filteredEvents = await getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return {
            props: {
                notFound: true
            }
        }
    }
    return {
        props: {
            events: filteredEvents,
            date: {
                year: filteredYear,
                month: filteredMonth
            }
        }
    }
}
export default FilteredEventsPage;