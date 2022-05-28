import {applyMiddleware , combineReducers , createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideFriendsBarPageReducer from "./sideFriendsBarPage-reducer";
import myFollowersReducer from "./myFollowers-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
    profilePage:profileReducer,
    dialogsPage: dialogsReducer,
    sideFriendsBarPage:sideFriendsBarPageReducer,
    myFollowers: myFollowersReducer,
    auth: authReducer,
    form:formReducer
})

let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export type StoreType = ReturnType<typeof rootReducer>;



export default store