import { useRouter } from 'next/router';

import { getFilteredEvents } from './../../dummy-data';

import EventList from './../../components/events/event-list';

function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    if (!filterData) {
        return <p>Loading...</p>
    }
    if (filterData.length !== 2) {
        return <p>Could not find any event. Check URL please</p>
    }
    const filteredYear = +filterData[0];
    const filteredMonth = +filterData[1];

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth
    })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found with this filter</p>
    }

    return <div>
        <EventList items={filteredEvents} />
    </div>
}

export default FilteredEventsPage;