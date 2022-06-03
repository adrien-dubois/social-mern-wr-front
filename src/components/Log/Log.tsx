import React from 'react'
import { Div } from './Log.elements'

const Log = () => {
  return (
    <Div>
        <div className="form-container">
            <form className="form-container__form">
              <input
                type="checkbox"
                name='profile'
                id='profil'
                className='form-container__form__switch'
              />
              <label htmlFor='profil'>
                Connectez-vous
              </label>
            </form>
        </div>
    </Div>
  )
}

export default Log