import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import { configureStore } from './store.js'

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root'),
)