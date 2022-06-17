import React , {ChangeEvent , useEffect , useState} from 'react';

export type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {
    const [editMode,setEditMode] =  useState(false)
    const [status,setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
      setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
      setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editMode
                ?
                <div><input autoFocus={true}
                            onBlur={deActivateEditMode}
                            type="text"
                            value={status}
                            onChange={onStatusChange}
                />
                </div>
                :
                <div><span onClick={activateEditMode}>'{props.status || 'type here'}'</span></div>
            }
        </>
    );
};

export default ProfileStatusWithHooks;