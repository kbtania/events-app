import Header from '../components/header/header-item';
import Cover from '../components/cover/cover-block';
import EventList from '../components/events/event-list';

import styles from '../styles/home-page.module.css';

import { getFeaturedEvents } from './../dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Header />
      <Cover />
      <h2 className={styles.sectionTitle}>Featured Events</h2>
      <EventList items={featuredEvents} />
    </div>
  )
}
