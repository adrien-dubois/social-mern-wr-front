import { useState } from 'react';
import Log from '../../components/Log/Log';
import Navbar from '../../components/Navbar/Navbar';
import UpdateProfil from '../../components/UpdateProfil/UpdateProfil';
import { Div } from './Profil.elements';

const Profil = () => {

  const user = localStorage.getItem('profile');
  return (
    <>
      <Div>
      <Navbar/>
        <div className="container">

        { user ? (

          <UpdateProfil/>

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
    </>
  )
}

export default Profil