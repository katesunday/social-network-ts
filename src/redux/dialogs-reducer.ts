
import {ActionType} from "./profile-reducer";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

export type DialogsDataPropsType = {
    id: number
    name: string
}
export type MessageDataPropsType = {
    id: number
    message: string
}
export type DialogsPageType = {
    messages: Array<MessageDataPropsType>,
    dialogs: Array<DialogsDataPropsType>,
    newMessageText: string
}

let initialState = {
    dialogs: [
        {id: 1 , name: 'Kate'} ,
        {id: 2 , name: 'Philip'} ,
        {id: 3 , name: 'Mama'} ,
        {id: 4 , name: 'Tanya'} ,
        {id: 5 , name: 'Anna'} ,
    ] ,
    messages: [
        {id: 1 , message: 'Hello'} ,
        {id: 2 , message: 'Hooray'} ,
        {id: 3 , message: 'studying?'} ,
        {id: 4 , message: 'I learn JS!'} ,
        {id: 5 , message: 'How are you?'} ,
    ] ,
    newMessageText: 'type here...'
}

// type dialogsReducerType = (state: DialogsPageType , action: ActionType) => DialogsPageType
export const dialogsReducer = (state = initialState , action: ActionType): DialogsPageType => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_BODY: {
        //     return {
        //         ...state ,
        //         newMessageText: action.body
        //     }
        //     // stateCopy.newMessageText = action.body
        // }
        case SEND_MESSAGE : {
            let newMessage = action.newMessageBody
            return {
                ...state ,
                messages: [...state.messages,{id: 7 , message: newMessage}] ,
            }
        }
        default:
            return state
    }
};

// export const updateNewMessageBodyAC = (body: string) => (
//     {type: 'UPDATE-NEW-MESSAGE-BODY' , body: body}) as const
export const sendNewMessageAC = (newMessageBody:string) => (
    {type: 'SEND-MESSAGE',newMessageBody}) as const

export default dialogsReducer;

