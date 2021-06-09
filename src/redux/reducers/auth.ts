import { IError } from "../../interfaces/IError";
import { constants } from "../constants";
import { IAction } from "../store";

interface AuthState {
    loggedIn: boolean,
    loading: boolean,
    error?: IError
}

const initialState: AuthState = {
    loggedIn: false,
    loading: false,
};

export const authReducer = (state = initialState, action: IAction): AuthState => {
    switch (action.type) {
        case constants.AUTH_REQUEST:
            return {
                ...state,
                loading: true
            };
        case constants.SUCCESS_REQUEST:
            return {
                ...state,
                loading: false,
                loggedIn: true
            };
        case constants.FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case constants.SET_CURRENT_USER:
            return {
                ...state,
                loggedIn: true
            };
        case constants.USER_LOGOUT:
            return {
                ...state,
                loggedIn: false
            };
        default:
            return state;
    }
};