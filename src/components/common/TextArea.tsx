import React from 'react';
import s from './TextArea.module.css'


//{input,meta,...props}
type TextAreaPropsType = {
    input: any
    meta:any
}
const TextArea = ({input,meta,...props}:TextAreaPropsType) => {
    console.log(input,meta)
    const hasError = meta.touched && meta.error
    return (
        <div className={s.formControl + '' + hasError? s.error: ''}>
            <textarea {...input}{...props} />
            {hasError && <span>{meta.error}</span>}
        </div>


    );
};

export default TextArea;