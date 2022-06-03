import React  from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {AddMessageFormRedux , AddMessageFormType} from "./Message/AddMessageForm";


export type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    newMessageText: string
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {


    const dialogsElements = props.dialogsPage.dialogs.map(dialog => {
        return (
            <DialogItem id={dialog.id} key={dialog.id} name={dialog.name}/>
        )
    })
    const messagesElements = props.dialogsPage.messages.map(message => (
        <Message key={message.id} text={message.message}/>
    ))
    const addNewMessage = (addMessageFormType: AddMessageFormType) => {
        props.sendMessage(addMessageFormType.newMessageBody)
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}
            />
        </div>
    );
};




export default Dialogs;