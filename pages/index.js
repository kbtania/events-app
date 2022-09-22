import Head from 'next/head';

import Cover from '../components/cover/cover-block';
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';

import styles from '../styles/home-page.module.css';

import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>Event Explorer</title>
      </Head>
      <Cover />
      <NewsletterRegistration />
      <h2 className={styles.sectionTitle}>Featured Events</h2>
      <EventList items={props.featuredEvents} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents: featuredEvents
    },
    revalidate: 1800
  }
}
