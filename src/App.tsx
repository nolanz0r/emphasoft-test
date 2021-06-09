import { FC, useEffect } from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { setAuthToken } from "./core/axios";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { logoutAction, setUserAction } from "./redux/actions/auth";
import { Navbar } from "./components/Navbar";

import "./styles/App.css";

export const App: FC = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const { loggedIn } = useSelector((state: any) => state.auth);
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(logoutAction(history));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      dispatch(setUserAction());
    }
  }, []);

  return (
    <div className="app">
      {loggedIn ? (
        <>
          <Navbar onClick={logoutHandler} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </>
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect from="*" to="/login" />
        </Switch>
      )}
    </div>
  );
};
