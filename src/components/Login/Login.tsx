import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";
import {Input} from "../common/FormControls";
import { required} from "../../utils/validators/validators";
import {connect } from "react-redux";
import {loginUser} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";
import { Navigate } from 'react-router-dom';
import s from './Login.module.css'

type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}
type LoginPropsType = {
    isAuth:boolean
    loginUser:(login:string,password:string,rememberMe:boolean)=>void
}
const Login = (props:LoginPropsType) => {
    const onSubmit = (formData:FormDataType) => {
        let {password,email,rememberMe} = formData
       props.loginUser(email,password,rememberMe)

    }
    if(props.isAuth){
        return <Navigate to={'/profile'}/>
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
            <Field component = {Input} name={'email'} placeholder = 'email'
                   validate = {[required]}/>
        </div>
        <div>
            <Field component = {Input} name={'password'} placeholder = 'Password'
                  type='password' validate = {[required]}/>
        </div>
        <div>
            <Field component = {Input} type="checkbox" name={'rememberMe'} />
            <span>Remember me</span>
        </div>
        <div className={s.errorMessage}>{props.error && <div>{props.error}</div>}</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}
export const LoginReduxForm = reduxForm<FormDataType>({form: 'LoginForm'})(LoginForm)

const mapStateToProps = (state:StoreType)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{loginUser})(Login);