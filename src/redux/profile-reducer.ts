import {authAPI , followersAPI , profileAPI} from "../api/api";
import {sendNewMessageAC } from "./dialogs-reducer";
import {followUnFollowSuccess ,
    setCurrentPage ,
    setFollowers ,
    setTotalFollowersCount , toggleFollowingProgress , toggleIsFetching ,
} from "./myFollowers-reducer";
import {setAuthUserData} from "./auth-reducer";
import {PostDataPropsType} from "../components/Profile/MyPosts/Post/MyPostsContainer";
import {AxiosError} from "axios";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


export type ProfilePageType = {
    posts: Array<PostDataPropsType>
    profile: UserProfileType | null
    status: string
}
export type UserProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1 , message: "Hi,how are you?" , likeAmount: 15} ,
        {id: 2 , message: "It's my first post!" , likeAmount: 20} ,
    ] ,
    profile: null ,
    status: ""
}

const profileReducer = (state: ProfilePageType = initialState , action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6 ,
                message: action.newPostBody ,
                likeAmount: 0 ,
            }
            return {
                ...state ,
                posts: [ newPost,...state.posts ] ,
            }

        }
        case DELETE_POST:{
            return {...state,posts:state.posts.filter(el=>el.id!== action.id)}
        }
        case SET_USER_PROFILE: {
            return {...state , profile: action.profile}
        }
        case SET_STATUS: {
            return {...state , status: action.status}
        }
        default:
            return state
    }
};

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof deletePostAC> |
    ReturnType<typeof sendNewMessageAC> | ReturnType<typeof followUnFollowSuccess> | ReturnType<typeof setFollowers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalFollowersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setStatus>


export const addPostAC = (newPostBody:string) => (
    {type: 'ADD-POST',newPostBody}) as const

export const deletePostAC = (id:number) => (
    {type: 'DELETE-POST',id}) as const


export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE ,
        profile: profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS ,
        status: status
    } as const
}

export const getUserProfile = (id: string | undefined) => {
    return async (dispatch: (action: ActionType) => void) => {
       try {
           let data = await  followersAPI.getProfile(id)
           dispatch(setUserProfile(data))
       }catch (e) {
           const err = e as Error | AxiosError<{ error: string }>
           console.log(err)
       }
    }
}

export const checkAuthMeProfile = () => {
    return async (dispatch: (action: ActionType) => void) => {
        try {
            let data = await authAPI.isAuthMe()
            if (data.resultCode === 0){
                let userId = data.data.id
                let profile = await  followersAPI.getProfile(userId)
                dispatch(setUserProfile(profile))
            }
        }catch (e) {
            const err = e as Error | AxiosError<{ error: string }>
            console.log(err)
        }
    }
}

export const getStatus = (id: string) => {
    return async (dispatch: (action: ActionType) => void) => {
      try {
          let data = await  profileAPI.getStatus(id)
          dispatch(setStatus(data))
      }catch (e) {
          const err = e as Error | AxiosError<{ error: string }>
          console.log(err)
      }
    }
}
export const updateStatus = (newStatus: string) => {
    return async (dispatch: (action: ActionType) => void) => {
       try {
           let data = await profileAPI.updateStatus(newStatus)
           if (data.resultCode === 0) {
               dispatch(setStatus(newStatus))
           }
       }catch (e) {
           const err = e as Error | AxiosError<{ error: string }>
           console.log(err)
       }
    }
}

export default profileReducer;

