import axios from 'axios';
import React, { useState } from 'react'
import { Div } from './SigninForm.elements'


const SigninForm = () => {

  const [email, setEmail] = useState<string>('');

  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: any) => {

  }

  return (
    <Div>
        Connection

        <form onSubmit={handleLogin} id="signin-form" >
          <input type="submit" value="Se connecter" />
        </form>
    </Div>
  )
}

export default SigninForm