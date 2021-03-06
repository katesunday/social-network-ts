import React from 'react';
import styles from '../Profile.module.css';
import Preloader from "../../common/Preloader";
import {UserProfileType} from "../../../redux/profile-reducer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


type ProfileInfoPropsType = {
    profile: UserProfileType | null
    status:string
    updateStatus:(newStatus:string)=>void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
             <div className={styles.avaAndStatus}>
                 <div className={styles.avaDiv}>
                     <img className={styles.ava} src={props.profile.photos.small} alt='ava'/>
                 </div>


                 <div className={styles.desc}>
                     <h3>{props.profile.fullName}</h3>
                     <br/>
                     <span>My status:</span>
                     {/*<ProfileStatus status ={props.status} updateStatus = {props.updateStatus}/>*/}
                     <ProfileStatusWithHooks status ={props.status} updateStatus = {props.updateStatus}/>
                 </div>
             </div>


            <div>About me: {props.profile.aboutMe}</div>

        </div>
    );
};

export default ProfileInfo;