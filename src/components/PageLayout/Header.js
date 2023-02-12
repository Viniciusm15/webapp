import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'

import { getToken, handleLogout } from '@/services/Auth'

export default function Header() {
    const router = useRouter()
    const [token, setToken] = useState(false);

    useEffect(() => {
        setToken(getToken());
    }, []);

    return (
        <div className="cavani_tm_header">
            <div className="logo">
                <a className="text" href="/"><span>Logo</span></a>
            </div>

            <div className="menu">
                {router.pathname === "/" ?
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
                        <span className="ccc"></span>
                    </ul>
                    :
                    token && <a onClick={handleLogout}><Image
                        src="/social/user-outlined.svg"
                        height={35}
                        width={35}
                        alt=""
                    /> </a>
                }
            </div>
        </div>
    )
}
