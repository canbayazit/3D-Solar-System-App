import {configureStore} from '@reduxjs/toolkit';
import planetReducer from './PlanetSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import thunk from 'redux-thunk';

const persistConfig={
    key:'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, planetReducer)

export const store = configureStore({

    reducer:{
        planets:persistedReducer,
        middleware: [thunk]
    },
}) ;

export const persistor = persistStore(store)