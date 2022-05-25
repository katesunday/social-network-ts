import {ActionType} from "./profile-reducer";
export type SideFriendsBarPageType = {
    friendItems: Array<SideFriendsBarPropsType>
}


export type SideFriendsBarPropsType = {
    name: string
    img: string
}

let initialState = {
    friendItems: [
        {
            name: 'Sasha' ,
            img: 'https://media.istockphoto.com/vectors/cute-surprised-cat-round-icon-emoji-gray-cat-with-whiskers-mouth-open-vector-id1203518848'
        } ,
        {
            name: 'Masha' ,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3x2D7eP09Im1N0At7wSKWnZQKWQIXOjJfRA&usqp=CAU'
        } ,
        {
            name: 'Dasha' ,
            img: 'https://media.istockphoto.com/vectors/round-button-for-web-icon-gamer-girl-avatar-retro-button-banner-round-vector-id1247154889'
        } ,
    ]
}

const sideFriendsBarPageReducer = (state = initialState,action:ActionType)=>{
    return state
}
export default sideFriendsBarPageReducer;