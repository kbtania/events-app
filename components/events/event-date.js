import styles from '../../styles/events.module.css';

function EventDate(props) {
    const formattedMonth = props.date.toLocaleString('eng-us', { month: 'long' })
    return <p className={`center ${styles.main}`}>Events on {formattedMonth}, {props.date.getFullYear()}</p>
}

export default EventDate;