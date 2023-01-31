import Image from 'next/image'

export default function Header() {
    return (
        <div className="cavani_tm_header">
            <div className="logo">
                <a className="text" href="#"><span>Logo</span></a>
            </div>

            <div className="menu">
                <ul className="transition_link">
                    <li className="active"><a href="#home">Início</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#about">Quem somos</a></li>
                    <li><a href="#contact">Contato</a></li>
                    <li><a href="#userArea">
                        <Image
                            src="/social/user-outlined.svg"
                            height={35}
                            width={35}
                            alt=""
                        />
                    </a></li>
                </ul>

                <span className="ccc"></span>
            </div>
        </div>
    )
}
