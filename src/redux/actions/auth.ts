import axios from "axios";
import { Dispatch } from "react";
import { IAuth } from "../../interfaces/IAuth";
import { setAuthToken } from "../../core/axios";
import { constants } from "../constants";
import { IAction } from "../store";

export const loginAction = (values: IAuth, history: any) => {
    return (dispatch: Dispatch<IAction>) => {
        dispatch({ type: constants.AUTH_REQUEST })

        axios
            .post("/api-token-auth/", values)
            .then(res => {
                const { token } = res.data;
                if (token) {
                    localStorage.setItem("token", token);

                    setAuthToken(token);

                    dispatch({ type: constants.SUCCESS_REQUEST })
                    history.push("/")
                }
            })
            .catch(err => dispatch({ type: constants.FAIL_REQUEST, payload: err.response.data.non_field_errors[0] }));
    };
};

export const setUserAction = () => {
    return {
        type: constants.SET_CURRENT_USER
    }
}

export const logoutAction = (history: any) => {
    return async (dispatch: Dispatch<IAction>) => {
        localStorage.removeItem("token")
        dispatch({ type: constants.USER_LOGOUT })
        history.push("/login")
    };
};

