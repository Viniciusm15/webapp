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
                        <div className="avatar">
                            <div className="image" data-img-url="../assets/empty.jpg"></div>
                        </div>
                        <div className="menu_list">
                            <ul className="transition_link">
                                <li className="active"><a href="#portfolio">Ensaios</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="#"><img className="svg" src="../assets/social/facebook.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/instagram.svg" alt="" /></a></li>
                                <li><a href="#"><img className="svg" src="../assets/social/twitter.svg" alt="" /></a></li>
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