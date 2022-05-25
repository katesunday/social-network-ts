import   {addPostAC , ProfilePageType , setUserProfile , updateNewPostAC} from "./profile-reducer";
import {DialogsPageType , sendNewMessageAC , updateNewMessageBodyAC} from "./dialogs-reducer";
import {
      followSuccess ,
    setCurrentPage ,
    setFollowers ,
    setTotalFollowersCount , toggleFollowingProgress , toggleIsFetching ,
      unFollowSuccess
} from "./myFollowers-reducer";
import {setAuthUserData } from "./auth-reducer";
import {SideFriendsBarPageType} from "./sideFriendsBarPage-reducer";

// export type StoreType = {
//     _state: StatePropsType
//     getState: () => StatePropsType
//     subscribe: (observer: (state: StatePropsType) => void) => void
//     renderEntireTree: (state: StatePropsType) => void
//     dispatch: (action: ActionType) => void
// }


//
// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1 , message: "Hi,how are you?" , likeAmount: 15} ,
//                 {id: 2 , message: "It's my first post!" , likeAmount: 20} ,
//             ] ,
//             newPostText: 'it-camasutra.by' ,
//             profile:null
//         } ,
//         dialogsPage: {
//             dialogs: [
//                 {id: 1 , name: 'Kate'} ,
//                 {id: 2 , name: 'Philip'} ,
//                 {id: 3 , name: 'Mama'} ,
//                 {id: 4 , name: 'Tanya'} ,
//                 {id: 5 , name: 'Anna'} ,
//             ] ,
//             messages: [
//                 {id: 1 , message: 'Hello'} ,
//                 {id: 2 , message: 'Hooray'} ,
//                 {id: 3 , message: 'studying?'} ,
//                 {id: 4 , message: 'I learn JS!'} ,
//                 {id: 5 , message: 'How are you?'} ,
//             ] ,
//             newMessageText: 'type here...'
//         } ,
//         sideFriendsBarPage: {
//             friendItems: [
//                 {
//                     name: 'Sasha' ,
//                     img: 'https://media.istockphoto.com/vectors/cute-surprised-cat-round-icon-emoji-gray-cat-with-whiskers-mouth-open-vector-id1203518848'
//                 } ,
//                 {
//                     name: 'Masha' ,
//                     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3x2D7eP09Im1N0At7wSKWnZQKWQIXOjJfRA&usqp=CAU'
//                 } ,
//                 {
//                     name: 'Dasha' ,
//                     img: 'https://media.istockphoto.com/vectors/round-button-for-web-icon-gamer-girl-avatar-retro-button-banner-round-vector-id1247154889'
//                 } ,
//             ]
//         }
//     } ,
//     getState() {
//         return this._state
//     } ,
//     subscribe(observer: (state: StatePropsType) => void) {
//         this.renderEntireTree = observer
//     } ,
//     renderEntireTree() {
//         console.log('state changed')
//     } ,
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage , action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage , action)
//         this.renderEntireTree(this._state)
//     } ,
// }


// export type StatePropsType = {
//     profilePage: ProfilePageType,
//     dialogsPage: DialogsPageType
//     sideFriendsBarPage: SideFriendsBarPageType
//
// }




// export default store