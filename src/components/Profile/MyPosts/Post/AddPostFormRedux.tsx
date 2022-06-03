import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";


export type AddPostFormType = {
    newPostBody: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea'
                   name='newPostBody'
                   placeholder='Add new post'
            />
            <button>Send</button>
        </div>
    </form>

}
export const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'AddMessageForm'})(AddPostForm)