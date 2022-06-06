import {authAPI} from "../api/api";
import {ActionType} from "./profile-reducer";
import {Dispatch} from "redux";
import {ThunkAction, ThunkDispatch } from "redux-thunk";
import {StoreType} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA'

export type UserDataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}
let initialState: UserDataType = {
    email: null ,
    id: null ,
    login: null ,
    isAuth: false
}

const authReducer = (state = initialState , action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state ,
                ...action.data ,
                isAuth: action.data.isAuth ,
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: UserDataType) => {
    return {
        type: SET_USER_DATA ,
        data: {...data}
    } as const
}



export const getAuthUserData = () => {
    return (dispatch: Dispatch ) => {
        authAPI.isAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    // let {email,id,login} = response.data.data
                    dispatch(setAuthUserData({...data.data,isAuth:true}))
                }
            })
    }
}

export const loginUser = (email: string , password: string , rememberMe: boolean): ThunkAction<void, StoreType, unknown, ActionType> => {
    return (dispatch )  => {
        authAPI.loginUser(email,password,rememberMe)
            .then((data)=>{
               dispatch(getAuthUserData())
            })
    }
}

export const logoutUser = ()=>{
    return (dispatch: Dispatch ) =>{
        authAPI.logoutUser()
            .then(data=>{
                dispatch(setAuthUserData({login:null,email:null,id:null,isAuth:false}))
            })
    }
}

export default authReducer;