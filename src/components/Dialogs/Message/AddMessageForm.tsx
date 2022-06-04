import React from 'react';
import {Field , InjectedFormProps , reduxForm} from "redux-form";
import TextArea from "../../common/TextArea";
import {maxLengthCreator , required} from "../../../utils/validators/validators";

export type AddMessageFormType = {
    newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={TextArea}
                   name='newMessageBody'
                   placeholder='Type here'
                   validate = {[required, maxLengthCreator(1000)]}
            />
            <button>Send</button>
        </div>
    </form>

}
export const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'AddMessageForm'})(AddMessageForm)