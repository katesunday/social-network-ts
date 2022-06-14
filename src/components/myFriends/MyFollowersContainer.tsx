import React from 'react';
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    follow ,
    FollowerType , getFollowers ,
    setCurrentPage ,
    setFollowers ,
    setTotalFollowersCount ,
    toggleFollowingProgress ,
    toggleIsFetching , unFollow ,
} from "../../redux/myFollowers-reducer";
import MyFollowers from "./MyFollowers";
import {Navigate} from "react-router-dom";
import {
    getCurrentPage , getFollowingInProgress , getIsAuth ,
    getIsFetching ,
    getMyFollowers ,
    getPageSize ,
    getTotalFollowersCount
} from "../../redux/followers-selectors";

type MyFollowersPropsType = {
    followers: Array<FollowerType>
    pageSize: number
    totalFollowersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalFollowersCount: (totalCount: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    toggleIsFetching: (isFetching: boolean) => void
    getFollowers: (currentPage: number , pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
    isAuth: boolean
}

class MyFollowersContainer extends React.Component<MyFollowersPropsType> {  // my props and my state

    componentDidMount() {
        this.props.getFollowers(this.props.currentPage , this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getFollowers(page , this.props.pageSize)
    }


    render() {
        return this.props.isAuth ?
            <MyFollowers followers={this.props.followers}
                         pageSize={this.props.pageSize}
                         totalFollowersCount={this.props.totalFollowersCount}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         isFetching={this.props.isFetching}
                         followingInProgress={this.props.followingInProgress}
                         follow={this.props.follow}
                         unFollow={this.props.unFollow}
            /> :
            <Navigate to={'/login'}/>
    }
}


type MapStateToPropsType = {
    followers: Array<FollowerType>
    pageSize: number
    totalFollowersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth: boolean
}
// let mapStateToProps = (state: StoreType): MapStateToPropsType => {
//     return {
//         followers: state.myFollowers.followers ,
//         pageSize: state.myFollowers.pageSize ,
//         totalFollowersCount: state.myFollowers.totalFollowersCount ,
//         currentPage: state.myFollowers.currentPage ,
//         isFetching: state.myFollowers.isFetching ,
//         followingInProgress: state.myFollowers.followingInProgress ,
//         isAuth: state.auth.isAuth ,
//     }
//
// }
let mapStateToProps = (state: StoreType)=>{
    return{
        followers:getMyFollowers(state),
        pageSize: getPageSize(state),
        totalFollowersCount: getTotalFollowersCount(state),
        currentPage : getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
        isAuth:getIsAuth(state)
    }
}

export default connect(mapStateToProps , {
    follow , unFollow , setFollowers , setCurrentPage ,
    setTotalFollowersCount , toggleIsFetching , toggleFollowingProgress ,
    getFollowers
})
(MyFollowersContainer)