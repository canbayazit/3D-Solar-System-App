import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { client } from "../Services/axios";

const initialState ={  
    loading:false,
    stars:[],
    isSun:false   
}

export const getStars = createAsyncThunk (
    'stars/getStars', async()=>{  
        const URL = "https://private-93626-solarsystem2.apiary-mock.com/"
        const response = await axios.get(URL);      
        return response.data;
       
    }
  );

const starSlice = createSlice({
    name:"stars",
    initialState: initialState,
    reducers: {        
        setIsSun: (state, action) => {
            state.isSun = action.payload;
        }
    },
    extraReducers: {
        [getStars.pending] : (state) => {  
          state.loading = true;
      },
        [getStars.fulfilled] : (state,action) => {  
            state.loading=false;            
            state.stars = action.payload.stars;
         
      },
        [getStars.rejected] : (state,action) => { 
            state.loading=false;
            state.error = action.error.message;
    }
  
    }
  
});

export const {setIsSun} = starSlice.actions;
export default starSlice.reducer;