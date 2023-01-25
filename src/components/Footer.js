import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.cavani_tm_footer}>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2023</p>
            </div>
            <div className={styles.socia}>
                <ul>
                    <li><a href="#"><img className="svg" src="../assets/social/facebook.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="../assets/social/twitter.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="../assets/social/instagram.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="../assets/social/dribbble.svg" alt="" /></a></li>
                    <li><a href="#"><img className="svg" src="../assets/social/tik-tok.svg" alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
