import axios from 'axios';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Button } from '../../GlobalStyles';
import Input from '../../utils/Input/Input';
import InputPassword from '../../utils/Input/InputPassword/InputPassword';
import { Div } from './SigninForm.elements'

const initialState = { email: '', password: '' };

const SigninForm = () => {

  const [formData, setFormData] = useState(initialState);

  const handleLogin = (e: any) => {
    e.preventDefault();
    
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Div>

        <form 
          onSubmit={handleLogin} 
          autoComplete="off"
        >
          <Input
            icon={<FaEnvelope/>}
            type="email"
            placeholder='E-Mail'
            name="email"
            handleChange={handleChange}
          />
          <div className="email error"></div>

          <InputPassword
            name="password"
            handleChange={handleChange}
            placeholder="Mot de passe"
          />
          <div className="password error"></div>

          <Button type="submit" className='btn-signin'>
            Se connecter
          </Button>

        </form>
    </Div>
  )
}

export default SigninForm