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
    getFollowers:(currentPage:number,pageSize:number)=> void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

class MyFollowersContainer extends React.Component<MyFollowersPropsType> {  // my props and my state

    componentDidMount() {
        this.props.getFollowers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getFollowers(page,this.props.pageSize)
    }


    render() {
        return <MyFollowers followers={this.props.followers}
                            pageSize={this.props.pageSize}
                            totalFollowersCount={this.props.totalFollowersCount}
                            currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            isFetching={this.props.isFetching}
                            followingInProgress={this.props.followingInProgress}
                            follow={this.props.follow}
                            unFollow={this.props.unFollow}
        />
    }
}


type MapStateToPropsType = {
    followers: Array<FollowerType>
    pageSize: number
    totalFollowersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
let mapStateToProps = (state: StoreType): MapStateToPropsType => {
    return {
        followers: state.myFollowers.followers ,
        pageSize: state.myFollowers.pageSize ,
        totalFollowersCount: state.myFollowers.totalFollowersCount ,
        currentPage: state.myFollowers.currentPage ,
        isFetching: state.myFollowers.isFetching ,
        followingInProgress: state.myFollowers.followingInProgress ,
    }

}
// let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (userID: number) => {
//             dispatch(followAC(userID))
//         } ,
//         unFollow: (userID: number) => {
//             dispatch(unFollowAC(userID))
//         } ,
//         setFollowers: (newFollowers: Array<FollowerType>) => {
//             dispatch(setFollowersAC(newFollowers))
//         } ,
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         } ,
//         setTotalFollowersCount: (totalCount: number) => {
//             dispatch(setTotalFollowersCountAC(totalCount))
//         },
//         toggleIsFetching:(isFetching:boolean)=>{
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps , {
    follow , unFollow , setFollowers , setCurrentPage ,
    setTotalFollowersCount , toggleIsFetching , toggleFollowingProgress,
    getFollowers
})
(MyFollowersContainer)