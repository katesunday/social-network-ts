import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {StoreType} from "../../redux/redux-store";
import SideFriendsBarContainer from "../SideFrendsBar/SideFriendsBarContainer";

type NamesPropsType = {
    store:StoreType
   // friendsItems: Array<SideFriendsBarPropsType>
}
const Navbar = () => {
    //props:NamesPropsType
    let isActiveStyle = {
        color:'#f5588d'
    };
    return (

        <nav className={styles.nav}>
            <div className={styles.item}><NavLink to="/profile"
                                                  style={( {isActive} ) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Profile</NavLink></div>
            <div className={styles.item}><NavLink to="/myFollowers"
                                                  style={( {isActive} ) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>My followers</NavLink></div>
            <div className={styles.item}><NavLink to="/dialogs"
                                                  style={( {isActive} ) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Messages</NavLink></div>
            <div className={styles.item}><NavLink to="/news"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>News</NavLink></div>
            <div className={styles.item}><NavLink to="/music"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Music</NavLink></div>
            <div className={styles.item}><NavLink to="/settings"
                                                  style={({isActive}) =>
                                                      isActive ? isActiveStyle : {}
                                                  }>Settings</NavLink></div>
            <SideFriendsBarContainer
                //store ={props.store}
            />
        </nav>


    );
};

export default Navbar;