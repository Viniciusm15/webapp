export default function Header() {
    return (
        <div className="cavani_tm_header">
            <div className="logo">
                <a className="text" href="#"><span>Cavani</span></a>
            </div>

            <div className="menu">
                <ul className="transition_link">
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#service">Service</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <span className="ccc"></span>
            </div>
        </div>
    )
}