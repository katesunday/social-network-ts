
import {followersAPI} from "../api/api";
import {ActionType} from "./profile-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FOLLOWERS = 'SET-FOLLOWERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_FOLLOWERS_COUNT = 'SET-TOTAL-FOLLOWERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

export type MyFollowersType = {
    followers: Array<FollowerType>
    pageSize: number
    totalFollowersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress:Array<number>
}
export type FollowerType = {
    photos: {
        small: string
        large: string
    }
    id: number
    img: string
    followed: boolean
    name: string
    fullName: string
    status: string
    location: LocationOfFollowerType
}
export type LocationOfFollowerType = {
    city: string
    country: string
}
let initialState: MyFollowersType = {
    followers: [] ,
    pageSize: 20 ,
    totalFollowersCount: 0 ,
    currentPage: 1 ,
    isFetching: false ,
    followingInProgress: []
}

//type profileReducerType = (state: ProfilePageType , action: ActionType) => ProfilePageType
const myFollowersReducer = (state = initialState , action: ActionType): MyFollowersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state ,
                followers: state.followers.map((el) => el.id === action.userID ? {...el , followed: true} : el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state ,
                followers: state.followers.map((el) => el.id === action.userID ? {...el , followed: false} : el)
            }
        }
        case "SET-FOLLOWERS": {
            return {
                ...state ,
                followers: action.newFollowers
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state ,
                currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-FOLLOWERS-COUNT": {
            return {
                ...state ,
                totalFollowersCount: action.totalFollowersCount
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state ,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state ,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress,action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        }
        default:
            return state
    }
};

export const followSuccess = (userID: number) => {
    return {
        type: FOLLOW ,
        userID: userID
    } as const

}
export const unFollowSuccess = (userID: number) => {
    return {
        type: UNFOLLOW ,
        userID: userID
    } as const

}
export const setFollowers = (newFollowers: Array<FollowerType>) => {
    return {
        type: SET_FOLLOWERS ,
        newFollowers: newFollowers

    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE ,
        currentPage: currentPage
    } as const
}
export const setTotalFollowersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_FOLLOWERS_COUNT ,
        totalFollowersCount: totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING ,
        isFetching: isFetching
    } as const
}
export const toggleFollowingProgress = (isFetching: boolean,userId:number) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS ,
        followingInProgress: isFetching,
        userId:userId
    } as const
}

export const getFollowers = (currentPage:number,pageSize:number)=> {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(toggleIsFetching(true))
        followersAPI.getFollowers(currentPage , pageSize).then(data => {
            dispatch(setFollowers(data.items))
            dispatch(setTotalFollowersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
        })
    }
}
export const follow = (id:number)=>{
    return (dispatch: (action: ActionType) => void)=>{
        dispatch(toggleFollowingProgress(true, id))
        followersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingProgress(false, id))
            })
    }
}

export const unFollow = (id:number)=>{
    return (dispatch: (action: ActionType) => void)=>{
        dispatch(toggleFollowingProgress(true , id))
        followersAPI.unFollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(id))
                }
                dispatch(toggleFollowingProgress(false , id))
            })
    }
}

export default myFollowersReducer;

