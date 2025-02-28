import React from "react";
import Header from "./Header";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /*
          MainContainer
           - videoBackground
           - videoTitle
           secondaryContainer
           - MovieList *n
            - cards
         */
      }
    </>
  );
};

export default Browse;
