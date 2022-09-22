const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Coding Bootcamp',
        description:
            'Learn in-demand skills, join a world-renowned community and kick-start your career in tech. Study from anywhere with a learning schedule designed for you. Grasp programming foundations, write robust code with object-oriented programming and build MVC software from scratch. Master relational databases and SQL. Develop responsive web pages with HTML and CSS. Master modern JavaScript and all the tools and environment like Webpack and Node.js.',
        location: '11200 Stratton Ave, 37011 Nashville',
        date: '2022-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e2',
        title: 'Networking for introverts',
        description:
            "Popular media and culture likes to portray introverts as being socially awkward or aloof people who can’t succeed in a social setting. Of course, this is far from the truth. When the world favors extroversion so much, it’s easy to forget that being a social butterfly is not the only way to be a socially adept person in this world. We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
        location: 'New Wall Street 5, 98765 New Work',
        date: '2022-05-30',
        image: 'images/introvert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e3',
        title: 'Networking for extroverts',
        description:
            'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
        location: 'Green Street 12, 10115 Crossville',
        date: '2022-04-10',
        image: 'images/extrovert-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e4',
        title: 'Cooking master class',
        description:
            'Cooking classes created for people of all skill levels. We will help you to take your cooking skills to the next level.',
        location: 'Main St 14, 10113 Rockwood',
        date: '2022-06-19',
        image: 'images/cooking-event.jpg',
        isFeatured: true,
    },
    {
        id: 'e5',
        title: 'Art Party',
        description:
            'YOU and your guests get to decide what painting youd like to paint.YOU get to decide what guests to invite and YOU get to decide how youd like to host your party. We bring the party to you and you get to let your creativity run wild in a safe environment with people you love!',
        location: 'Side St 34, 10113 Crossville',
        date: '2022-06-20',
        image: 'images/art-event.jpg',
        isFeatured: true,
    },
];

export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
    return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    let filteredEvents = DUMMY_EVENTS.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}

export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
}