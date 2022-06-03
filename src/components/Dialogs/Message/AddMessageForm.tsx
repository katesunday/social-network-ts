import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";

export type AddMessageFormType = {
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea'
                   name='newMessageBody'
                   placeholder='Type here'
            />
            <button>Send</button>
        </div>
    </form>

}
export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'AddMessageForm'})(AddMessageForm)