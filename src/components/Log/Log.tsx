import React, { FunctionComponent, useState } from 'react'
import { IconContext } from 'react-icons';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
import { Buttons, Div } from './Log.elements'

type LogProps = {
  signin: boolean,
  signup: boolean
}

const Log: FunctionComponent<LogProps> = ({
  signin,
  signup
}) => {
  
  const [signIn, setSignIn] = useState<boolean>(signin);
  const [signUp, setSignUp] = useState<boolean>(signup);

  const handleForm = (e: any) => {
    if(e.target.id === 'register' ) {
      setSignIn(false);
      setSignUp(true);
    } else if (e.target.id === 'login') {
      setSignIn(true);
      setSignUp(false);
    }
  }

  return (
    <Div>
        <div className="form-container">
            <div className='form-container__row'>
              <div className="form-container__row__buttons">
                <Buttons 
                  id="login" 
                  onClick={handleForm}
                  className={signIn ? "active" : ""} 
                >
                  Inscription
                </Buttons>
                <Buttons 
                  id="register" 
                  onClick={handleForm} 
                  className={signUp ? "active" : ""}
                >
                  Connection
                </Buttons>
              </div>
            </div>

            <div className="sign-component">
              <IconContext.Provider value={{ color: "#FFF", size: "4rem" }}>
                <div className="sign-component__title">
                  { signUp ? <FaUserPlus/> : <FaUserCircle/> } <br/>
                  { signUp ? "S'enregistrer" : "Se connecter" }
                </div>
              </IconContext.Provider>
              { signIn && <SigninForm/> }
              { signUp && <SignupForm/> }
            </div>
        </div>
    </Div>
  )
}

export default Log