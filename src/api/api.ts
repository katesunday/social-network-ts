import axios from "axios";
import login from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true ,
    baseURL: `https://social-network.samuraijs.com/api/1.0/` ,
    headers: {
        'API-KEY': "1ec1e9c7-abf6-4bfd-8f4d-61f7bd79b19a"
    }

})
export const followersAPI = {
    getFollowers: (currentPage: number = 1 , pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    } ,
    unFollowUser: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    } ,
    followUser: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    } ,

    getProfile: (userId: string | undefined) => {
        console.warn('obsolete method')
        return  profileAPI.getProfile(userId)

        // return instance.get(`profile/` + userId)
        //     .then(response => response.data)
    }
}
export const profileAPI = {
    getProfile: (userId: string | undefined) => {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    } ,
    getStatus: (userId: string ) => {
        return instance.get(`/profile/status/` + userId)
            .then(response => response.data)
    } ,
    updateStatus: (newStatus: string) => {
        return instance.put(`/profile/status`,{status: newStatus})
            .then(response=>response.data)
    }
}
export const authAPI = {
    isAuthMe: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    } ,
    loginUser:(email: string , password: string , rememberMe: boolean = false)=>{
        return instance.post(`auth/login`,{email , password , rememberMe})
            .then(response=> response.data)
    },
    logoutUser:()=>{
        return instance.delete(`auth/login`)
    }

}


