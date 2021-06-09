import { IAuth } from "../interfaces/IAuth";
import { IError } from "../interfaces/IError";

export const loginValidation = (values: IAuth) => {
    const errors: IError = {};
    if (!values.username) {
        errors.username = "Username is required";
    }
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be 6 or more characters";
    }
    return errors;
};