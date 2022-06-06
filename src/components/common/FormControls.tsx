import React , {ReactNode} from 'react';
import s from './TextArea.module.css'
import {WrappedFieldProps} from "redux-form";
import {WrappedFieldInputProps , WrappedFieldMetaProps} from "redux-form/lib/Field";

type FormControl = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    placeholder?: string
    children: ReactNode
}


const FormControl: React.FC<FormControl> = ({input,meta, children, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + '' + hasError? s.error: ''}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>


    );
};

export const TextArea :
    React.FC<WrappedFieldProps & { placeholder?: string}>
    = (props)=>{
    const{input,meta,...restProps} = props
    return <FormControl {...props}>
        <textarea {...input}{...restProps}/>
    </FormControl>
}

export const Input:
    React.FC<WrappedFieldProps & { placeholder?: string}>
    = (props)=>{
    const{input,meta,...restProps} = props
    return <FormControl {...props}>
        <input {...input}{...restProps}/>
    </FormControl>
}

