import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import './styles/normalize.css';
import './index.css';
import App from './App';
import store, {persistor} from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    
    <Provider store={store}>

        <HashRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </HashRouter>

    </Provider>
);


