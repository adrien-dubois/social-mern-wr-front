import { useRef, useState, useEffect } from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { useAppDispatch } from "../..";
import { resetErrors, signup } from "../../actions/Auth";
import { Button } from '../../GlobalStyles';
import ErrorNotification from '../../utils/ErrorNotifications';
import Input from '../../utils/Input/Input';
import InputPassword from '../../utils/InputPassword/InputPassword';
import Uploader from '../../utils/Uploader/Uploader';
import LoginForm from './LoginForm';

const initialState = { email: '', pseudo: '', password: '', confirmPassword:'', bio:'', picture: '' }

const RegisterForm = () => {

  interface RootState {
    auth: any,
    errors: any
  }

  const dispatch: any = useAppDispatch();

  /*------ MANAGE ERROR STATES ------*/
  const isError = useSelector((state: RootState) => state.errors.isError);
  const isPass = useSelector((state: RootState) => state.errors.isPass);
  const [error, setError] = useState<boolean>(false);
  const [errorPass, setErrorPass] = useState<boolean>(false);
  const [ isRegistred, setIsRegistred] = useState<boolean>(false);

  /*----- FORM FIELDS STATE -----*/
  const [formData, setFormData] = useState(initialState);
  const form = useRef<any>(null);
  const pass = useRef<any>(null);
  const confpass = useRef<any>(null);

  const passData = (data: any) => {
    setFormData({
      ...formData,
      picture: data
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(signup(formData))
    .then(() => setIsRegistred(true))
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
    <>
    {isRegistred ? (
      <LoginForm/>
      ) : (
        
    <>
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
          name="pseudo"
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

        <Uploader passData={passData}/>


          <Button fontBig={false} big={false} type="submit" className='btn-signin'>
            S'enregistrer
          </Button>
      </form>
      </>
      )}
    </>

  )
}

export default RegisterForm