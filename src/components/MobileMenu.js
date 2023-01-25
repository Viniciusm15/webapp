import styles from '../styles/MobileMenu.module.css'

export default function MobileMenu() {
    return (
        <>
            <div className={styles.cavani_tm_topbar}>
                <div className={styles.topbar_inner}>
                    <div className={styles.logo} data-type="image">
                        <a className={styles.text} href="#"><span>Cavani</span></a>
                    </div>

                    <div className={styles.trigger}>
                        <div className={styles.hambuger}>
                            <div className={styles.hambuger}>
                                <div className={styles.hamburger_inner}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cavani_tm_mobile_menu}>
                <div className={styles.inner}>
                    <div className="wrapper">
                        <div className={styles.avatar}>
                            <div className={styles.image} data-img-url="../assets/empty.jpg"></div>
                        </div>
                        <div className={styles.menu_list}>
                            <ul className="transition_link">
                                <li className="active"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#news">News</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className={styles.social}>
                            <ul>
                                <li><a href="#"><img className="svg" src="../assets/social/facebook.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/twitter.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/instagram.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/dribbble.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/tik-tok.svg" alt="" /></a></li>
                            </ul>
                        </div>
                        <div className={styles.copyright}>
                            <p>Copyright &copy; 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
