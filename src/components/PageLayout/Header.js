import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import { getToken } from '@/services/Auth'

export default function Header() {

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
                <ul className="transition_link">
                    {!token ? <><li className="active"><a href="#home">Início</a></li>
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
                        </a></li></>
                        :
                        <li className="active"><a>
                            <Image
                                src="/social/user-outlined.svg"
                                height={35}
                                width={35}
                                alt=""
                            />
                        </a></li>}
                </ul>

                <span className="ccc"></span>
            </div>
        </div>
    )
}
