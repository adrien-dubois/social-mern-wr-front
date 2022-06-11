import { useEffect, useRef, useState } from 'react'
// @ts-ignore
import FileBase from 'react-file-base64';

/*----- STYLE & ICONS -----*/
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { Button } from '../../GlobalStyles';
import Input from '../../utils/Input/Input';
import InputPassword from '../../utils/InputPassword/InputPassword';
import { Div } from './SignupForm.elements'

/*----- HOOKS -----*/
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../..';

/*----- COMPONENTS -----*/
import { resetErrors, signup } from '../../actions/Auth';
import ErrorNotification from '../../utils/ErrorNotifications';

const initialState = { email: '', pseudo: '', password: '', confirmPassword:'', bio:'', image: '' }

const SignupForm = () => {

  /*----- HOOKS STATES -----*/
  const dispatch: AppDispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  interface RootState {
    auth: any,
    errors: any
  }

  /*------ MANAGE ERROR STATES ------*/
  const isError = useSelector((state: RootState) => state.errors.isError);
  const isPass = useSelector((state: RootState) => state.errors.isPass);
  const [error, setError] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);

  /*----- FORM FIELDS STATE -----*/
  const [formData, setFormData] = useState(initialState);
  const form = useRef<any>(null);
  const pass = useRef<any>(null);
  const confpass = useRef<any>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
  }

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if(error === true){
      setError(false);
      dispatch(resetErrors);
    }
    if(errorPass === true){
      setErrorPass(false);
      dispatch(resetErrors);
    }
  };

// If redux send an error message, this use effect will clear the login form
// Or pass fields if it's a password's error
useEffect(() => {
  if(isError === true){
    form.current.reset();
    setError(true);
  }
  if(isPass === true){
    pass.current.value="";
    confpass.current.value="";
    setErrorPass(true);
  }
}, [isError, isPass]);

  return (
    <Div>
      <ErrorNotification/>

      <form 
          onSubmit={handleSubmit} 
          autoComplete="off"
          ref={form}
      >
        <Input 
          icon={<FaUser/>}
          type="text"
          placeholder="Pseudo"
          name="name"
          handleChange={handleChange}
          error={error}
        />
        <Input
          icon={<FaEnvelope/>}
          type="email"
          placeholder="E-Mail"
          name="email"
          handleChange={handleChange}
          error={error}
        />

        <InputPassword
          name="password"
          error={errorPass}
          handleChange={handleChange}
          placeholder="Mot de passe"
          innerRef={pass}
        />
        <InputPassword 
          name="confirmPassword" 
          error={errorPass}
          placeholder="Confirmation mot de passe" 
          handleChange={handleChange}
          innerRef={confpass}
        />

        <div className="input-file">
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64: any) => setFormData({ ...formData, image: base64 })}
          />
        </div>

          <Button type="submit" className='btn-signin'>
            S'enregistrer
          </Button>
      </form>
    </Div>
  )
}

export default SignupForm