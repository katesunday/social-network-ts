import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {StoreType} from "./redux-store";
import {ActionType} from "./profile-reducer";
import {AxiosError} from "axios";


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
    return  async (dispatch: ThunkDispatch<StoreType , unknown , AppActionsType>) => {
      try {
          await dispatch(getAuthUserData())
          dispatch(initializedSuccess())
      }
      catch (e) {
          const err = e as Error | AxiosError<{ error: string }>
          console.log(err)
      }

    }
}

// export const initializeApp = () => {
//     return  (dispatch: ThunkDispatch<StoreType , unknown , AppActionsType>) => {
//         let promise =  dispatch(getAuthUserData())
//         Promise.all([promise]).then(()=>{
//             dispatch(initializedSuccess())
//         })
//
//     }
// }




export default appReducer;