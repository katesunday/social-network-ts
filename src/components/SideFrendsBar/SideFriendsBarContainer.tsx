import React from 'react';
import {StoreType} from "../../redux/redux-store";
import SideFriendsBar from "./SideFriendsBar";
import {connect} from "react-redux";
import {ActionType} from "../../redux/profile-reducer";
import {SideFriendsBarPropsType} from "../../redux/sideFriendsBarPage-reducer";

type NamesPropsType = {
    store: StoreType
}


type MapStateToPropsType = {
    friendsItems:Array<SideFriendsBarPropsType>
}
let mapStateToProps = (state: StoreType) :MapStateToPropsType=> {
    return {
        friendsItems:state.sideFriendsBarPage.friendItems
    }
}
let mapDispatchToProps = (dispatch:(action: ActionType) => void) => {
    return {

    }
}
const SideFriendsBarContainer = connect(mapStateToProps,mapDispatchToProps)(SideFriendsBar);

export default SideFriendsBarContainer;