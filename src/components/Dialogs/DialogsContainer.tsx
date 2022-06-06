import React from 'react';
import {DialogsPageType , sendNewMessageAC } from '../../redux/dialogs-reducer'
import {StoreType} from "../../redux/redux-store";
import Dialogs  from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ActionType} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
}
let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage ,
        newMessageText: state.dialogsPage.newMessageText ,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendNewMessageAC(newMessageBody))
        } ,

    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps , mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    withAuthRedirect ,
    connect(mapStateToProps , mapDispatchToProps)
)(Dialogs);