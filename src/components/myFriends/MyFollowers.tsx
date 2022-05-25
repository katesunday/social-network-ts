import React from 'react';
import s from "./MyFollowers.module.css";
import userIcon from "../../img/Sample_User_Icon.png";
import {FollowerType} from "../../redux/myFollowers-reducer";
import Preloader from "../common/Preloader";
import {NavLink} from "react-router-dom";

type MyFollowersPropsType = {
    followers: Array<FollowerType>
    pageSize: number
    totalFollowersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (id: number) => void
    unFollow: (id: number) => void


}

const MyFollowers = (props: MyFollowersPropsType) => {
    let pageCount = Math.ceil(props.totalFollowersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    return <>
        {props.isFetching ?
            <Preloader/> :
            <div>
                <div>
                    {pages.map((page) => {
                        return <button onClick={() => props.onPageChanged(page)}
                                       className={props.currentPage === page ? s.pagesBtn : ''}>{page}</button>
                    })}
                </div>
                {props.followers.map((el) =>
                    <div key={el.id} className={s.follower}>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small != null ? el.photos.small : userIcon} alt={el.name}
                                 className={s.Fava}/>
                        </NavLink>

                        <div className={s.Fname}><span>{el.name}</span></div>
                        <div className={s.location}><span>{'el.location.country'}, </span>
                            <span>{'el.location.city'}</span></div>

                        {el.followed ?
                            <button disabled={props.followingInProgress.some((id) => id === el.id)}
                                    onClick={() => {
                                        props.unFollow(el.id)

                                    }} className={s.followBtn}>unfollow</button>
                            : <button disabled={props.followingInProgress.some((id) => id === el.id)}
                                      onClick={() => {
                                          props.follow(el.id)

                                      }} className={s.followBtn}>follow</button>}
                        <div className={s.status}><span>"{el.status}"</span></div>
                    </div>
                )}
            </div>
        }
    </>
};

export default MyFollowers;