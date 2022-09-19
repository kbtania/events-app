import { useRouter } from 'next/router';

import { getEventById } from '../../dummy-data';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event) {
        return <h1>No Event Found</h1>
    }
    return <div>
        Event Detail Page
    </div>
}

export default EventDetailPage;