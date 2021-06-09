import { useState, useEffect, SyntheticEvent } from "react";
import { IAuth } from "../interfaces/IAuth";
import { IError } from "../interfaces/IError";

export const useForm = (callback: () => void, validate: any) => {
    const [values, setValues] = useState<IAuth>({ username: "", password: "" });
    const [errors, setErrors] = useState<IError>({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (e: SyntheticEvent) => {
        if (e) e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (e: any) => {
        if (e) e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    };
};