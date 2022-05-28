import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h4>Login</h4>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    );
};


const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component = 'input' name={'login'} placeholder = 'Login'/>
        </div>
        <div>
            <Field component = {'input'} name={'password'} placeholder = 'Password'/>
        </div>
        <div>
            <Field component = 'input' type="checkbox" name={'rememberMe'}/>
            <span>Remember me</span>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
export const LoginReduxForm = reduxForm<FormDataType>({form: 'LoginForm'})(LoginForm)

export default Login;