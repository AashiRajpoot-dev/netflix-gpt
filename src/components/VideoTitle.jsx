import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-md w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black p-4 px-12 text-lg cursor-pointer  rounded-lg hover:opacity-80'>  Play </button>
        <button className='bg-gray-500 text-white p-4 px-12 text-lg cursor-pointer rounded-lg mx-2 hover:opacity-75'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
