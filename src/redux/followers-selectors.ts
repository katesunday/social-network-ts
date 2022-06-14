import {StoreType} from "./redux-store";

export const getMyFollowers = (state: StoreType)=>{
    return state.myFollowers.followers
}

export const getPageSize = (state: StoreType)=>{
    return state.myFollowers.pageSize
}

export const getTotalFollowersCount = (state: StoreType)=>{
    return state.myFollowers.totalFollowersCount
}

export const getCurrentPage = (state: StoreType)=>{
    return state.myFollowers.currentPage
}

export const getIsFetching = (state: StoreType)=>{
    return state.myFollowers.isFetching
}

export const getFollowingInProgress = (state: StoreType)=>{
    return state.myFollowers.followingInProgress
}

export const getIsAuth= (state: StoreType)=>{
    return state.auth.isAuth
}