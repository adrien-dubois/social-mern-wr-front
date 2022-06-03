import React from 'react'
import Log from '../../components/Log/Log'
import { Div } from './Profil.elements'

const Profil = () => {
  return (
    <Div>
      <div className="container">

        <div className="log-container">
          
          <div className="img-container">
            <img src='./assets/img/auth.png' alt='Authenfication guy'/>
          </div>

          <Log/>

        </div>
      </div>
    </Div>
  )
}

export default Profil