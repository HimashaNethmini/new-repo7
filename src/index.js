import React from "react";
import App from "./App.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "./store.js";
import persistStore from "redux-persist/es/persistStore.js";
import { PersistGate } from "redux-persist/integration/react";

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading</div>} persistor={persistStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
