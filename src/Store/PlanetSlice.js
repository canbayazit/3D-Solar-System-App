import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    planets:[],
    loading:false
}

const planetSlice = createSlice({
    name:"planets",
    initialState: initialState,
    reducers: {
        setPlanet: (state, action) => {
          state.planets = action.payload;
        }
    },
  
});

export const {setPlanet} = planetSlice.actions;
export default planetSlice.reducer;