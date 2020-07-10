import React from "react";
import {Field} from "redux-form";
import mod from "./FormsControl.module.sass";

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div>
            <input {...input} {...props} className={hasError ? mod.error : mod.notError}/>
        </div>
    )
};

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div>
            <textarea {...input} {...props} className={hasError ? mod.error : mod.notError}/>
        </div>
    )
};

export const createFieldForm = (placeholder, name, component, validate, props = {}, text = '') => {
    return <div>
        {text}
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props}/>
    </div>
};