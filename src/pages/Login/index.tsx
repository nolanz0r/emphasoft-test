import { FC } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { loginAction } from "../../redux/actions/auth";
import { useForm } from "../../hooks/useForm";
import { loginValidation } from "../../utils/validateRules";

import "./Login.css";

export const Login: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<any>>();
  const { loading, error } = useSelector((state: any) => state.auth);

  const formSubmitHandler = () => {
    dispatch(loginAction(values, history));
  };

  const { errors, values, handleChange, handleSubmit } = useForm(
    formSubmitHandler,
    loginValidation
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="login-title">Login</h2>
      <small
        className={`${
          error ? "login-input__error" : "login-input__error error-hide"
        }`}
      >
        {error || ""}
      </small>
      <input
        className="login-input"
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={handleChange}
      />
      <small
        className={`${
          errors.username
            ? "login-input__error"
            : "login-input__error error-hide"
        }`}
      >
        {errors.username || ""}
      </small>
      <input
        className="login-input"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
      />
      <small
        className={`${
          errors.password
            ? "login-input__error"
            : "login-input__error error-hide"
        }`}
      >
        {errors.password || ""}
      </small>
      <button className="login-submit">
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};
