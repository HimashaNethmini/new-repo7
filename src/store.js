import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const reducers = {
    todos,
}

const persistConfig ={
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers);
const persistReducer = persistReducer(persistConfig, rootReducer)
export const configureStore = () => createStore(rootReducer);