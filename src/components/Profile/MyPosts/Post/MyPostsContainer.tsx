import React  from 'react';
import MyPosts from "../MyPosts";
import {ActionType , addPostAC } from "../../../../redux/profile-reducer";
import {StoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    posts:Array<PostDataPropsType>
}
export type PostDataPropsType = {
    id: number
    message: string
    likeAmount: number
}
let mapStateToProps = (state: StoreType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts ,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        addPost: (newPostBody:string) => {
            dispatch(addPostAC(newPostBody))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps , mapDispatchToProps)(MyPosts);


export default MyPostsContainer;