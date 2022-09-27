import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { client } from "../Services/axios";

const initialState ={
    planets:[],
    loading:false,
    headerStatus:false, 
    planetIndex:0
}

export const getPlanets = createAsyncThunk (
    'planets/getPlanets', async()=>{  
        const URL = "https://private-93626-solarsystem2.apiary-mock.com/"
        const response = await axios.get(URL);      
        return response.data.planets;
       
    }
  );

const planetSlice = createSlice({
    name:"planets",
    initialState: initialState,
    reducers: {        
        setHeaderStatus: (state, action) => {
            state.headerStatus = action.payload;
        },
        setPlanetIndex: (state, action)=>{
            state.planetIndex = action.payload;
        }
    },
    extraReducers: {
        [getPlanets.pending] : (state) => {  
          state.loading = true;
      },
        [getPlanets.fulfilled] : (state,action) => {  
            state.loading=false;            
            state.planets = action.payload;
         
      },
      [getPlanets.rejected] : (state,action) => { 
        state.loading=false;
        state.error = action.error.message;
    }
  
    }
  
});

export const {setHeaderStatus,setPlanetIndex} = planetSlice.actions;
export default planetSlice.reducer;