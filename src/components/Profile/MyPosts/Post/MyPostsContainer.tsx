import React  from 'react';
import MyPosts from "../MyPosts";
import {ActionType , addPostAC , updateNewPostAC} from "../../../../redux/profile-reducer";
import {StoreType} from "../../../../redux/redux-store";
import {connect} from "react-redux";


type MapStateToPropsType = {
    posts:Array<PostDataPropsType>
    newPostText: string
}
export type PostDataPropsType = {
    id: number
    message: string
    likeAmount: number
}
let mapStateToProps = (state: StoreType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts ,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostChange: (text: string) => {
            dispatch(updateNewPostAC(text))
        } ,
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps , mapDispatchToProps)(MyPosts);


export default MyPostsContainer;