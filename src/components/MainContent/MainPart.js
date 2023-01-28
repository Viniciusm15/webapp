import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import UserArea from './UserArea'

export default function MainPart() {
    return (
        <div className="cavani_tm_mainpart">
            <div className="author_image">
                <div className="main ripple" id="ripple"></div>
            </div>

            <div className="main_content">
                <div className="cavani_tm_section animated" id="home">
                    <div className="cavani_tm_home">
                        <div className="content">
                            <h3 className="name">Fases Fotografia</h3>
                            <span className="line"></span>
                            <h3 className="job">
                                <span className="cd-headline clip">
                                    <span className="blc">Estúdio de <b className="is-visible">Fotografia</b></span>
                                </span>
                            </h3>
                            <div className="cavani_tm_button transition_link">
                                <a href="#userArea">Área do cliente</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cavani_tm_section" id="portfolio">
                    <div className="section_inner">
                        <Portfolio />
                    </div>
                </div>

                <div className="cavani_tm_section" id="about">
                    <div className="section_inner">
                        <About />
                    </div>
                </div>

                <div className="cavani_tm_section" id="contact">
                    <div className="section_inner">
                        <Contact />
                    </div>
                </div>

                <div className="cavani_tm_section" id="userArea">
                    <div className="section_inner">
                        <UserArea />
                    </div>
                </div>
            </div >
        </div >
    )
}
