import styles from '../../styles/cover-block.module.css';

import Image from 'next/image';

function Cover() {
    return <div className={styles.cover}>
        <div className={styles.left}>
            <h1 className={styles.title}>Events Explorer</h1>
            <p className={styles.subtitle}>Meet new friends who share your interests through exploring events. </p>
        </div>
        <Image src="/images/cover-img.jpg" alt="People" className={styles.img} width={800} height={600} />
    </div>
}

export default Cover;