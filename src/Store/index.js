import {configureStore} from '@reduxjs/toolkit';
import planetReducer from './PlanetSlice';

export const store = configureStore({

    reducer:{
        planets:planetReducer,
    },
}) ;