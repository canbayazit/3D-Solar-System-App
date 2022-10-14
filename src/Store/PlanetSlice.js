import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { client } from "../Services/axios";

const initialState ={
    planets:[],
    moons:[],
    loading:false,
    headerStatus:false, 
    planetIndex:0,
    click:false,
    positionX:0,
    positionZ:0,  
    rad:0,
    mod:false,
    pathname:'',
    speedStatus:false,  
    isPlanet:false,
    isMoon:false,
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
        setPositionX: (state, action)=>{
            state.positionX = action.payload;
        },
        setPositionZ: (state, action)=>{
            state.positionZ = action.payload;
        },        
        setRadius: (state, action)=>{
            state.rad = action.payload;
        },
        setMod: (state, action)=>{
            state.mod = action.payload;
        },
        setPathname: (state, action)=>{
            state.pathname = action.payload;
        },
        setSpeed: (state, action)=>{
            state.speedStatus = action.payload;
        },
        setIsPlanet: (state, action)=>{
            state.isPlanet = action.payload;
        },
        setIsMoon: (state, action)=>{
            state.isMoon = action.payload;
        }
    },
    extraReducers: {
        [getPlanets.pending] : (state) => {  
          state.loading = true;
      },
        [getPlanets.fulfilled] : (state,action) => {  
            state.loading=false;            
            state.planets = action.payload.planets;
            state.moons = action.payload.moons;
      },
        [getPlanets.rejected] : (state,action) => { 
            state.loading=false;
            state.error = action.error.message;
    }
  
    }
  
});

export const {setHeaderStatus,setPlanetIndex,setClick,setPositionX,setRadius,setPositionZ,setMod,setPathname,setSpeed,setIsPlanet,setIsMoon} = planetSlice.actions;
export default planetSlice.reducer;