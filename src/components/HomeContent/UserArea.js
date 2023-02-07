import React, { useState } from 'react'
import LoginForm from '../Forms/Authentication/LoginForm'
import RegisterForm from '../Forms/Authentication/RegisterForm'

export default function UserArea() {

    const [show, setShow] = useState(true);

    const handleState = () => {
        setShow(!show);
    }

    return (
        <div className="cavani_tm_form_responsive">
            <div className="cavani_tm_title">
                <span>Área do cliente</span>
            </div>

            {show ? <LoginForm handleState={handleState} /> : <RegisterForm handleState={handleState} />}
        </div>
    )
}
