import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {addNowPopularMovies} from '../utils/moviesSlice';

const useNowPopularMovies = () =>{
    const dispatch = useDispatch();
    // Fetch Data from TMDB Server and update the store
 

  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPopularMovies(json.results));
  };

  useEffect(() => {
    getNowPopularMovies();
  }, []);
}

export default useNowPopularMovies;