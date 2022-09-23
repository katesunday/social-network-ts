import React from 'react';

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false ,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            ...this.state ,
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType> , prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({

                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ?
                    <div><input autoFocus={true}
                                onBlur={this.deActivateEditMode}
                                type="text"
                                value={this.state.status}
                                onChange={this.onStatusChange}
                    />
                    </div>
                    :
                    <div><span onClick={this.activateEditMode}>'{this.state.status || 'type here'}'</span></div>
                }
            </>
        );
    }


};

export default ProfileStatus;