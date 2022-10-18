import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { client } from "../Services/axios";

const initialState ={
    planets:[],
    moons:[],
    planetArray:[],
    textureArray:[],
    texture:"",
    image:"",
    loading:false,
    headerStatus:false, 
    planetIndex:0,
    moonIndex:0,
    earthIndex:0,
    click:false,
    positionX:0,
    positionZ:0,  
    rad:0,
    mod:false,
    pathname:'',
    speedStatus:false,  
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
        setEarthIndex: (state, action)=>{
            state.earthIndex = action.payload;
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
        setIsMoon: (state, action)=>{
            state.isMoon = action.payload;
        },
        setPlanetArray: (state, action)=>{
            state.planetArray = action.payload;
        },
        setTextureArray: (state, action)=>{
            // state.textureArray.splice(0,state.textureArray.length,...action.payload)
            state.textureArray = action.payload;
        },
        setTexture: (state, action)=>{
            state.texture = action.payload;
        },
        setImage: (state, action)=>{
            state.cardImage = action.payload;
        },
        setMoonIndex: (state, action)=>{
            state.moonIndex = action.payload;
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

export const {setMoonIndex,setEarthIndex,setImage,setPlanetArray,setTextureArray,setTexture,setHeaderStatus,setPlanetIndex,setClick,setPositionX,setRadius,setPositionZ,setMod,setPathname,setSpeed,setIsMoon} = planetSlice.actions;
export default planetSlice.reducer;