import { combineReducers, configureStore } from "@reduxjs/toolkit";
import planetReducer from "./PlanetSlice";
import starReducer from "./StarSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  planets: planetReducer,
  stars: starReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
