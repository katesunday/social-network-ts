import React from 'react';
import s from './TextArea.module.css'


//{input,meta,...props}
type FormControlPropsType = {
    input: any
    meta:any
    child:any
}
const FormControl = ({input,meta,child,...props}:FormControlPropsType) => {
    console.log(input,meta)
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + '' + hasError? s.error: ''}>
            <textarea {...input}{...props} />
            {hasError && <span>{meta.error}</span>}
        </div>


    );
};

export const TextArea = (props: FormControlPropsType)=>{
    const{input,meta,child,...restProps} = props
    return <FormControl {...props}>
        <textarea {...input}{...restProps}/>
    </FormControl>
}

export const Input = (props: FormControlPropsType)=>{
    const{input,meta,child,...restProps} = props
    return <FormControl {...props}>
        <input {...input}{...restProps}/>
    </FormControl>
}

