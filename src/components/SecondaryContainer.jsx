import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies.nowPopularMovies);
  
  return (
    <div>
      {/*  
          - MovieList - popular
            - MovieCard*n
          - MovieList - Now Playing
          - MovieList - Trending
          - MovieList - Horror
           */}
      {movies?.length > 0 ? (
        <div className="bg-black">
          <div className="-mt-52  relative z-20">
            <MovieList title="Now Playing" movies={movies} />
          </div>
          <MovieList title="Trending" movies={movies} />
          <MovieList title="Popular" movies={popularMovies} />
          <MovieList title="Upcoming Movies" movies={movies} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SecondaryContainer;
