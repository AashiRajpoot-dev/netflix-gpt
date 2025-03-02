import React, { useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hooks/useNowPopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  return (
    <>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

 
      {/*
          MainContainer
           - videoBackground
           - videoTitle
           secondaryContainer
           - MovieList *n
            - cards
         */}
    </>
  );
};

export default Browse;
