import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";
import {maxLengthCreator , required} from "../../../../utils/validators/validators";
import TextArea from "../../../common/TextArea";


export type AddPostFormType = {
    newPostBody: string
}
const AddPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   name='newPostBody'
                   placeholder='Add new post'
                   validate = {[required, maxLengthCreator(20)]}
            />
            <button>Send</button>
        </div>
    </form>

}
export const AddPostFormRedux = reduxForm<AddPostFormType>({form: 'AddMessageForm'})(AddPostForm)