export default function UserArea() {
    return (
        <div className="cavani_tm_contact">
            <div className="cavani_tm_title">
                <span>Área do cliente</span>
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
            </div>
        </div>
    )
}
