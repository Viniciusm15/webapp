export default function Contact() {
    return (
        <div className="cavani_tm_contact">
            <div className="cavani_tm_title">
                <span>Entrar em contato</span>
            </div>
            <div className="short_info">
                <ul>
                    <li>
                        <div className="list_inner">
                            <img className="svg" src="img/svg/location.svg" alt="" />
                            <span>Ave Street, New York, USA</span>
                        </div>
                    </li>
                    <li>
                        <div className="list_inner">
                            <img className="svg" src="img/svg/mail.svg" alt="" />
                            <span><a href="#">hello@cavani.com</a></span>
                        </div>
                    </li>
                    <li>
                        <div className="list_inner">
                            <img className="svg" src="img/svg/call.svg" alt="" />
                            <span>+77 022 444 05 05</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="form">
                <div className="left">
                    <div className="fields">
                        <form action="/" method="post" className="contact_form" id="contact_form">
                            <div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
                            <div className="empty_notice"><span>Please Fill Required Fields</span></div>
                            <div className="first">
                                <ul>
                                    <li>
                                        <input id="name" type="text" placeholder="Name" autoComplete="off" />
                                    </li>
                                    <li>
                                        <input id="email" type="text" placeholder="Email" autoComplete="off" />
                                    </li>
                                </ul>
                            </div>
                            <div className="last">
                                <textarea id="message" placeholder="Message"></textarea>
                            </div>
                            <div className="cavani_tm_button">
                                <a id="send_message" href="#">Enviar</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="map_wrap">
                    </div>
                </div>
            </div>
        </div>
    )
}
