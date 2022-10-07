import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { client } from "../Services/axios";

const initialState ={
    planets:[],
    loading:false,
    headerStatus:false, 
    planetIndex:0,
    click:false,
    position:0,
    mod:false,
    isPlanet:false,
    pathname:''
}

export const getPlanets = createAsyncThunk (
    'planets/getPlanets', async()=>{  
        const URL = "https://private-93626-solarsystem2.apiary-mock.com/"
        const response = await axios.get(URL);      
        return response.data;
       
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
        },
        setClick: (state, action)=>{
            state.click = action.payload;
        },
        setPosition: (state, action)=>{
            state.position = action.payload;
        },
        setMod: (state, action)=>{
            state.mod = action.payload;
        },
        setIsPlanet: (state, action)=>{
            state.isPlanet = action.payload;
        },
        setPathname: (state, action)=>{
            state.pathname = action.payload;
        }
    },
    extraReducers: {
        [getPlanets.pending] : (state) => {  
          state.loading = true;
      },
        [getPlanets.fulfilled] : (state,action) => {  
            state.loading=false;            
            state.planets = action.payload.planets;
         
      },
        [getPlanets.rejected] : (state,action) => { 
            state.loading=false;
            state.error = action.error.message;
    }
  
    }
  
});

export const {setHeaderStatus,setPlanetIndex,setClick,setPosition,setMod,setIsPlanet,setPathname} = planetSlice.actions;
export default planetSlice.reducer;