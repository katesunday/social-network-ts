
import {authAPI} from "../api/api";
import {ActionType} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA'

export type UserDataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth:boolean
}
let initialState: UserDataType = {
    email: null ,
    id: null ,
    login: null ,
    isAuth:false
}

const authReducer = (state = initialState , action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state ,
                ...action.data,
                isAuth:true,
            }
        default:
            return state
    }
}

export const setAuthUserData = (data:UserDataType)=>{
    return{
        type:SET_USER_DATA,
        data:{...data}
    }as const
}

export const getAuthUserData = ()=>{
    return(dispatch:(action:ActionType)=>void)=>{
        authAPI.isAuthMe()
            .then(data => {
                if(data.resultCode ===0){
                    // let {email,id,login} = response.data.data
                    dispatch(setAuthUserData(data.data))
                }
            })
    }
}

export default authReducer;