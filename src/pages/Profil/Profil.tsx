import { useState } from 'react';
import Log from '../../components/Log/Log';
import { Div } from './Profil.elements';

const Profil = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')!));
  return (
    <Div>
      <div className="container">

      { user ? (

        <h1>UPDATE PAGE</h1>

      ) : (
        <div className="log-container">

          <Log signup={true} signin={false} />

          <div className="img-container">
            <img src='./assets/img/auth.png' alt='Authenfication guy'/>
          </div>
          
        </div>
      )}
      </div>
    </Div>
  )
}

export default Profil