import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "./redux-store";
import {ActionType} from "./profile-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS'

export type AppDataType = {

    initialized: boolean
}
let initialState: AppDataType = {
    initialized: false

}


export type AppActionsType = initializedSuccessType
const appReducer = (state = initialState , action: AppActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state ,
                initialized: true
            }
        default:
            return state
    }
}

export type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    } as const
}

export const initializeApp = () => {
    return (dispatch: ThunkDispatch<StoreType , unknown , AppActionsType>) => {
       let promise =  dispatch(getAuthUserData())
            Promise.all([promise]).then(()=>{
                dispatch(initializedSuccess())
            })

    }
}

// export const getAuthUserData = () => {
//     return (dispatch: Dispatch ) => {
//         authAPI.isAuthMe()
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     // let {email,id,login} = response.data.data
//                     dispatch(setAuthUserData({...data.data,isAuth:true}))
//                 }
//             })
//     }
// }


export default appReducer;