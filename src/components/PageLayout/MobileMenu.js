import Image from 'next/image'

export default function MobileMenu() {
    return (
        <>
            <div className="cavani_tm_topbar">
                <div className="topbar_inner">
                    <div className="logo">
                        <a className="text" href="#"><span>Cavani</span></a>
                    </div>
                    <div className="trigger">
                        <div className="hamburger hamburger--slider">
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cavani_tm_mobile_menu">
                <div className="inner">
                    <div className="wrapper">
                        <div className="menu_list">
                            <ul className="transition_link">
                                <li><a href="#userArea">
                                    <Image
                                        src="social/user-outlined.svg"
                                        height={35}
                                        width={35}
                                    />
                                </a></li>
                                <li className="active"><a href="#home">Início</a></li>
                                <li><a href="#portfolio">Portfólio</a></li>
                                <li><a href="#about">Quem somos</a></li>
                                <li><a href="#contact">Contato</a></li>
                            </ul>
                        </div>

                        <div className="social">
                            <ul>
                                <li><a href="#"><Image
                                    className="svg"
                                    src="social/facebook.svg"
                                    height={15}
                                    width={15}
                                /></a></li>

                                <li><a href="#"><Image
                                    className="svg"
                                    src="social/instagram.svg"
                                    height={15}
                                    width={15}
                                /></a></li>

                                <li><a href="#"><Image
                                    className="svg"
                                    src="social/whatsapp-fill.svg"
                                    height={15}
                                    width={15}
                                /></a></li>
                            </ul>
                        </div>

                        <div className="copyright">
                            <p>Copyright &copy; 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
