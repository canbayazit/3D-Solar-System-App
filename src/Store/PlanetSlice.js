import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    planets:[],
    loading:false,
    headerStatus:false
}

const planetSlice = createSlice({
    name:"planets",
    initialState: initialState,
    reducers: {
        setPlanet: (state, action) => {
          state.planets = action.payload;
        },
        setHeaderStatus: (state, action) => {
            state.headerStatus = action.payload;
        }
    },
  
});

export const {setPlanet,setHeaderStatus} = planetSlice.actions;
export default planetSlice.reducer;