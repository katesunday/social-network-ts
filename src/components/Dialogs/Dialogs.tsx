import React , {useRef} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";



export type DialogsPropsType = {
    updateNewMessageBody:(body:string)=>void
    sendMessage:()=> void
    dialogsPage:DialogsPageType
    newMessageText:string
    isAuth:boolean
}

const Dialogs = (props:DialogsPropsType) => {


    const dialogsElements = props.dialogsPage.dialogs.map(dialog =>{
        return (
            <DialogItem id={dialog.id} key ={dialog.id} name={dialog.name}/>
        )
    })
    const messagesElements = props.dialogsPage.messages.map(message => (
        <Message key = {message.id} text={message.message}/>
    ))
    let newMessageElement = useRef<HTMLTextAreaElement | null>(null);
    const OnSendMessageClick = () => {
        if(newMessageElement.current){
            props.sendMessage()
        }
    }
    const onPostChange = () => {
        if(newMessageElement.current) {
            let body = newMessageElement.current.value
            console.log(body)
            props.updateNewMessageBody(body)
        }
    }
    
    return (
        <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>
             {dialogsElements}
         </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMessageElement} onChange={onPostChange} value={props.newMessageText}/>
            <button onClick={OnSendMessageClick}>Send</button>
        </div>
    );
};

export default Dialogs;