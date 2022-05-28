import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import { HashRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";


    // ReactDOM.render(
    //     <HashRouter>
    //         <React.StrictMode>
    //             <Provider store={store}>
    //             <App
    //                 //store={store} dispatch={store.dispatch.bind(store)}
    //                 />
    //             </Provider>
    //         </React.StrictMode>
    //     </HashRouter> ,
    //     document.getElementById('root')
    // );

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
    <HashRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>
    </HashRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
