import HomeContent from './HomeContent'
import styles from '../styles/MainPart.module.css'

export default function MainPart() {
    return (
        <div className={styles.cavani_tm_mainpart}>
            <div className={styles.author_image}>
                <div className={`${styles.main} ${styles.ripple}`} id="ripple"></div>
            </div>

            <div className={styles.main_content}>
                <HomeContent />
            </ div>
        </div>
    )
}
