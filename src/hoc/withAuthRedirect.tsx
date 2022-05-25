import React  from 'react';
import {Navigate} from "react-router-dom";
import {StoreType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: StoreType)=>({
    isAuth:state.auth.isAuth
})
export const withAuthRedirect = (Component: any) => {
 class RedirectComponent extends React.Component<{isAuth: boolean}>{
     render() {
         // if(!this.props.isAuth) {
         //      return <Navigate to={'/login'}/>
         // }
         return <Component {...this.props}/>

     }
 }
 let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
 return ConnectedAuthRedirectComponent
};


export default withAuthRedirect;