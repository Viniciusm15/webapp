
import Header from '@/components/Header'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <Header />
            <div className="cavani_tm_section" id="about">
                <div className="section_inner">
                    <div className={styles.cavani_tm_about}>
                        <div className={styles.biography}>
                            <div className={styles.cavani_tm_title}>
                                <span>About Me</span>
                            </div>
                            <div className="wrapper">
                                <div className={styles.left}>
                                    <p>Hello there! My name is <strong>David Parker.</strong> I am a graphic designer, and I'm very passionate and dedicated to my work.</p>
                                    <p>With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                                </div>
                                <div className={styles.right}>
                                    <ul>
                                        <li><span className={styles.first}>Name:</span><span className="second">David Parker</span></li>
                                        <li><span className={styles.first}>Address:</span><span className="second">Ave Street, New York, USA</span></li>
                                        <li><span className={styles.first}>Study:</span><span className="second">Univercity of Oxford</span></li>
                                        <li><span className={styles.first}>Degree:</span><span className="second">Master of Science</span></li>
                                        <li><span className={styles.first}>Mail:</span><span className="second"><a href="#">hello@cavani.com</a></span></li>
                                        <li><span className={styles.first}>Phone:</span><span className="second">+77 022 444 05 05</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
