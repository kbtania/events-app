import styles from '../../styles/cover-block.module.css';

function Cover() {
    return <div className={styles.cover}>
        <div className={styles.left}>
            <h1 className={styles.title}>Events Explorer</h1>
            <p className={styles.subtitle}>Meet new friends who share your interests through exploring events. </p>
        </div>
        <img src="/images/cover-img.jpg" alt="People" className={styles.img} />
    </div>
}

export default Cover;