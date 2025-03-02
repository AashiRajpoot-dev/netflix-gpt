import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion';
import {BG_URL} from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
      {/* 1.gpt search bar
      2. GptMovieSuggestion
       */}
       <div className="absolute -z-10">
        <img src={BG_URL} />
      </div>
       <GptSearchBar />
       <GptMovieSuggestion />
    </div>
  )
}

export default GPTSearch
