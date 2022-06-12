import { FunctionComponent,  useState } from 'react'
import { IconContext } from 'react-icons';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa';
import SigninForm from '../SigninForm/SigninForm';
import SignupForm from '../SignupForm/SignupForm';
import { Buttons, Div } from './Log.elements'
import { IoMdLogIn } from 'react-icons/io';
import { FaUserEdit } from 'react-icons/fa';

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

            {/* TAB PART */}
            <div className='form-container__row'>
            <IconContext.Provider value={{ size: "1.8rem" }}>
             
                  <div className="sidebar">
                      <ul className="sidebar__ul">

                          <li className="sidebar__ul__li">
                              <Buttons 
                                className={ signUp ? 'sidebar__ul__li__a active' : 'sidebar__ul__li__a'}   
                                id='register'
                                onClick={handleForm}
                              >
                                <FaUserEdit/>&nbsp; Inscription
                              </Buttons>
                          </li>

                          <li className="sidebar__ul__li">
                              <Buttons 
                                className={ signIn ? 'sidebar__ul__li__a active' : 'sidebar__ul__li__a'}  
                                id='login'
                                onClick={handleForm}
                              >
                                  <IoMdLogIn/>&nbsp; Connexion
                              </Buttons>
                          </li>

                      </ul>
                  </div>
              
          </IconContext.Provider>
            </div>

            {/* FORM PART */}
            <div className="sign-component">
              <IconContext.Provider value={{ color: "#FFF", size: "4rem" }}>
                <div className="sign-component__title">
                  { signUp ? <FaUserPlus/> : <FaUserCircle/> } 
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