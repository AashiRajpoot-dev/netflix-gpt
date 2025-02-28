import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        nowPopularMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo = action.payload;
        },
        addNowPopularMovies:(state, action) =>{
            state.nowPopularMovies = action.payload
        },

    }
})
export const {addNowPlayingMovies, addTrailerVideo,addNowPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;