import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.cavani_tm_header}>
            <div className={styles.logo}>
                <label className={styles.text}>Cavani</label>
            </div>

            <div className={styles.menu}>
                <ul className="transition_link">
                    <li className={styles.active}><a href="#home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <span className={styles.ccc}></span>
            </div>
        </div>
    )
}
