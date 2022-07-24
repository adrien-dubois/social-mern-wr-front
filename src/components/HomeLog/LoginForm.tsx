import { useEffect, useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../..";
import { resetErrors, signin } from "../../actions/Auth";
import { Button } from "../../GlobalStyles";
import ErrorNotification from "../../utils/ErrorNotifications";
import Input from "../../utils/Input/Input";
import InputPassword from "../../utils/InputPassword/InputPassword";

const initialState = { username: "", password: "" };

const LoginForm = () => {
  /*----- HOOKS -----*/
  const dispatch: AppDispatch = useDispatch();

  interface RootState {
    auth: any;
    errors: any;
  }

  /*----- FORM FIELDS STATE -----*/
  const [formData, setFormData] = useState(initialState);
  const form = useRef<any>(null);
  const pass = useRef<any>(null);

  /*----- MANAGE ERRORS -----*/
  const isError = useSelector((state: RootState) => state.errors.isError);
  const [error, setError] = useState<boolean>(false);

  const handleLogin = (e: any) => {
    e.preventDefault();
    dispatch(signin(formData));
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error === true) {
      setError(false);
      dispatch(resetErrors);
    }
  };

  useEffect(() => {
    if (isError === true) {
      form.current.reset();
      setError(true);
    }
  }, [isError]);

  return (
    <>
      <ErrorNotification />
      <form onSubmit={handleLogin} autoComplete="off" ref={form}>
        <Input
          icon={<FaEnvelope />}
          type="email"
          placeholder="E-Mail"
          name="username"
          handleChange={handleChange}
          error={error}
        />
        <InputPassword
          name="password"
          handleChange={handleChange}
          placeholder="Mot de passe"
          error={error}
          innerRef={pass}
        />
        <Button
          fontBig={false}
          big={false}
          type="submit"
          className="btn-signin"
        >
          Connexion
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
