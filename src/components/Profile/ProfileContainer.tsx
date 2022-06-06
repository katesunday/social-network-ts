import React from 'react';
import {StoreType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {
    checkAuthMeProfile ,
    getStatus ,
    getUserProfile , updateStatus ,
    UserProfileType
} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {useParams} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export type ProfilePropsType = {
    profile: UserProfileType | null
    getUserProfile: (userId: string | undefined) => void
    checkAuthMeProfile: () => void
    match?: { userId?: string }
    isAuth: boolean
    getStatus: (userId: string | undefined) => void
    updateStatus: (newStatus: string) => void
    status: string
    userID: number | null
    authorizedUserID:number
}

class ProfileContainer extends React.Component<ProfilePropsType> {

    componentDidMount() {

        let userId: string | undefined = this.props.match?.userId
        if (!userId) {
            //this.props.checkAuthMeProfile()
            userId = (this.props.authorizedUserID).toString()

            if (this.props.userID) {
                userId = this.props.userID.toString()
                this.props.getStatus(userId)
                this.props.getUserProfile(userId)
            }

        }

        this.props.getStatus(userId)
        this.props.getUserProfile(userId)

    }

    render() {

        return (

            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profile: UserProfileType | null,
    status: string
    userID: number | null
    authorizedUserID:number | null
     isAuth:boolean

}
let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile ,
        status: state.profilePage.status ,
        userID: state.auth.id,
        authorizedUserID:state.auth.id,
        isAuth:state.auth.isAuth
    }
}

function ProfileWithMatch(props: ProfilePropsType): React.ReactNode {
    const match = useParams()
    return <ProfileContainer {...props}
                             match={match} updateStatus={props.updateStatus}
                             status={props.status} getStatus={props.getStatus}/>
}

let AuthRedirectComponent = withAuthRedirect(ProfileWithMatch)

//export default connect(mapStateToProps , {getUserProfile , checkAuthMeProfile})(AuthRedirectComponent)
export default compose(
    withAuthRedirect ,
    connect(mapStateToProps ,
        {getUserProfile , checkAuthMeProfile , getStatus , updateStatus})
)(AuthRedirectComponent)