import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {  StatePropsType } from "./redux/store";
import ReactDOM from "react-dom";
import { HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";

// let renderEntireTree = (_state:StatePropsType) => {
    ReactDOM.render(
        <HashRouter>
            <React.StrictMode>
                <Provider store={store}>
                <App
                    //store={store} dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </React.StrictMode>
        </HashRouter> ,
        document.getElementById('root')
    );
//}
//renderEntireTree(store.getState() );
 // store.subscribe(()=>{
 //     let state = store.getState();
 //     renderEntireTree(state)
 // })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
