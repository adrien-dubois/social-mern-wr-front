import { useEffect, useRef, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Button } from '../../GlobalStyles';
import Input from '../../utils/Input/Input';
import InputPassword from '../../utils/InputPassword/InputPassword';
import { Div } from './SigninForm.elements'
import { AppDispatch } from '../../index';
import { signin } from '../../actions/Auth';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const initialState = { email: '', password: '' };

const SigninForm = () => {

  /*----- HOOKS -----*/
  const dispatch: AppDispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  interface RootState {
    auth: any,
    errors: any
  }

  /*----- FORM FIELDS STATE -----*/
  const [formData, setFormData] = useState(initialState);
  const form = useRef<any>(null);
  const isError = useSelector((state: RootState) => state.errors.isError);
  const [error, setError] = useState<boolean>(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  }

  // This handler will target the right input to the right value in the initial state
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if(error === true){
      setError(false);
    }
  };

  // If redux send an error message, this use effect will clear the login form
  // Or pass fields if it's a password's error
  useEffect(() => {
    if(isError === true){
      form.current.reset();
      setError(true);
    }
  },[isError]);


  return (
    <Div>

        <form 
          onSubmit={handleLogin} 
          autoComplete="off"
          ref={form}
        >
          <Input
            icon={<FaEnvelope/>}
            type="email"
            placeholder='E-Mail'
            name="email"
            handleChange={handleChange}
            error={error}
          />

          <InputPassword
            name="password"
            handleChange={handleChange}
            placeholder="Mot de passe"
            error={error}
          />

          <Button type="submit" className='btn-signin'>
            Se connecter
          </Button>

        </form>
    </Div>
  )
}

export default SigninForm