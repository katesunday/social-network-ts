import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route , Routes} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MyFollowersContainer from "./components/myFriends/MyFollowersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import withAuthRedirect from "./hoc/withAuthRedirect";
import {AppDataType , initializeApp} from "./redux/app-reducer";
import {StoreType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader";
import Dialogs from "./components/Dialogs/Dialogs";


export type AppPropsType = {
    initializeApp: () => void
    initialized:boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
        // this.props.history.push('lo')
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<ProfileContainer/>}/>
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route path='/myFollowers' element={<MyFollowersContainer/>}/>
                        <Route path='/dialogs' element={<DialogsContainer/>}>
                            <Route path=':id' element={<DialogsContainer/>}/>
                        </Route>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state: StoreType): AppDataType => {
    return {
        initialized: state.app.initialized
    }

}

export default compose(
    // withAuthRedirect ,
    connect(mapStateToProps , {initializeApp}))(App);




