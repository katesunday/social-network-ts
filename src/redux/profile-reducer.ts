import {authAPI , followersAPI , profileAPI} from "../api/api";
import {sendNewMessageAC , updateNewMessageBodyAC} from "./dialogs-reducer";
import {
    followSuccess ,
    setCurrentPage ,
    setFollowers ,
    setTotalFollowersCount , toggleFollowingProgress , toggleIsFetching ,
    unFollowSuccess
} from "./myFollowers-reducer";
import {setAuthUserData} from "./auth-reducer";
import {PostDataPropsType} from "../components/Profile/MyPosts/Post/MyPostsContainer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


export type ProfilePageType = {
    posts: Array<PostDataPropsType>
    newPostText: string
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
    newPostText: 'it-camasutra.by' ,
    profile: null ,
    status: ""
}

//type profileReducerType = (state: ProfilePageType , action: ActionType) => ProfilePageType
const profileReducer = (state: ProfilePageType = initialState , action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6 ,
                message: state.newPostText ,
                likeAmount: 0 ,
            }
            return {
                ...state ,
                posts: [...state.posts , newPost] ,
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST: {
            return {
                ...state ,
                newPostText: action.newText
            }

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

export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostAC> |
    ReturnType<typeof sendNewMessageAC> | ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess> | ReturnType<typeof setFollowers> | ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalFollowersCount> | ReturnType<typeof toggleIsFetching> | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData> | ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setStatus>


export const addPostAC = () => (
    {type: 'ADD-POST'}) as const

export const updateNewPostAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST' ,
        newText: newText
    } as const
}
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
    return (dispatch: (action: ActionType) => void) => {
        followersAPI.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const checkAuthMeProfile = () => {
    return (dispatch: (action: ActionType) => void) => {
        authAPI.isAuthMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let userId = data.data.id
                    followersAPI.getProfile(userId)
                        .then(data => {
                            dispatch(setUserProfile(data))
                        })
                }
            })
    }
}

export const getStatus = (id: string) => {
    return (dispatch: (action: ActionType) => void) => {
        profileAPI.getStatus(id)
            .then(data => {
                //if(data.resultCode ===0){
                dispatch(setStatus(data))
                //}

            })
    }
}
export const updateStatus = (newStatus: string) => {
    return (dispatch: (action: ActionType) => void) => {
        profileAPI.updateStatus(newStatus)
            .then(data => {
                console.log(data)
                if (data.resultCode === 0) {
                    dispatch(setStatus(newStatus))
                }

            })
    }
}

export default profileReducer;

