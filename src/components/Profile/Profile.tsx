import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import { UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profile: UserProfileType | null
    status:string
    updateStatus:(newStatus:string)=>void

}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer
               // store = {props.store}
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
                // addPost = {props.addPost}
                // updateNewPostChange = {props.updateNewPostChange}
            />
        </div>
    );
};

export default Profile;