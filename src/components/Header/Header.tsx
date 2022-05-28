import React from 'react';
import './Header.module.css'
import styles from "./Header.module.css"
import {NavLink } from "react-router-dom";

type HeaderPropsType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth:boolean

}
const Header = (props:HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSlK7biFME4qBoswGraWRIjVqXwGttzLvsw&usqp=CAU" alt="#"/>
            <div className={styles.login}>
                {props.isAuth ?

                    <NavLink to = '/'>{props.login}</NavLink>
                   // props.login
                    :
                <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;