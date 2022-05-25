import React from 'react';
import s from "../myFriends/MyFollowers.module.css";
import loader from "../../img/loader.svg";

const Preloader = () => {
    return (
        <img className={s.loader} alt='loader' src={loader}/>
    );
};

export default Preloader;