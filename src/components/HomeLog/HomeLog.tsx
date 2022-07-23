import React, { FunctionComponent, useState } from 'react'
import { Div } from './HomeLog.elements'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

type Props = {
    signin: boolean,
    signup: boolean
}

const HomeLog: FunctionComponent<Props> = ({ signin, signup }) => {
    
    const [login, setLogin] = useState<boolean>(signin);
    const [register, setRegister] = useState<boolean>(signup);

    const handleForms = (e: any) => {
        if(e.target.id === "register") {
            setLogin(false);
            setRegister(true);
        } else if(e.target.id === "login") {
            setRegister(false);
            setLogin(true);
        }
    }

  return (
    <Div>
        <div className="form-container">
            <ul>
                <li
                    onClick={handleForms}
                    id="register"
                    className={ register ? "active-btn" : "" }
                >
                    S'inscrire
                </li>
                <li
                    onClick={handleForms}
                    id="login"
                    className={ login ? "active-btn" : "" }
                >
                    Se connecter
                </li>
            </ul>
            { register && <RegisterForm/> }
            { login && <LoginForm/> }
        </div>
    </Div>
  )
}

export default HomeLog