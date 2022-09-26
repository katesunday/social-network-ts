import {authAPI} from "../api/api";
import {ActionType} from "./profile-reducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {StoreType} from "./redux-store";
import {stopSubmit} from "redux-form";
import {AxiosError} from "axios";

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
    return async (dispatch: Dispatch) => {
        try {
            let data = await authAPI.isAuthMe()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData({...data.data , isAuth: true}))
            }
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            console.log(err)
        }

    }
}

export const loginUser = (email: string , password: string , rememberMe: boolean):
    ThunkAction<void , StoreType , unknown , ActionType | ReturnType<typeof stopSubmit>> => {
    return async (dispatch) => {
        try {
            let res = await authAPI.loginUser(email , password , rememberMe)
            if (res.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let errorMessage = res.messages.length > 0 ? res.messages[0] : 'Invalid email or password'
                dispatch(stopSubmit('LoginForm' , {_error: errorMessage}))
            }
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            console.log(err)
        }
    }
}

export const logoutUser = () => {
    return async (dispatch: Dispatch) => {
        try {
            await authAPI.logoutUser()
            dispatch(setAuthUserData({login: null , email: null , id: null , isAuth: false}))
        } catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            console.log(err)
        }
    }
}

export default authReducer;