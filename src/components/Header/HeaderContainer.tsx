import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData , UserDataType} from "../../redux/auth-reducer";
import {StoreType} from "../../redux/redux-store";
import {checkAuthMeProfile} from "../../redux/profile-reducer";

type HeaderContainerPropsType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth:boolean
    getAuthUserData:()=>void
    checkAuthMeProfile:()=>void

}
class HeaderContainer extends React.Component<HeaderContainerPropsType >{
    componentDidMount() {
        this.props.getAuthUserData()
        this.props.checkAuthMeProfile()
    }

    render() {
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state:StoreType):UserDataType =>({
    email:state.auth.email,
    id:state.auth.id,
    login: state.auth.login,
    isAuth:state.auth.isAuth,
})
export default connect(mapStateToProps,{getAuthUserData,checkAuthMeProfile})(HeaderContainer)