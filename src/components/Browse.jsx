import React, { useState } from 'react'

const Browse = () => {
  const[counter,setCounter] = useState(15);
  return (
    <>
    <div>
     counter :  {counter}
    </div>
    <button className='border' onClick={() => setCounter((preCounter) => preCounter+1)}>Increase Count</button>
    <button className='border' onClick={() => setCounter((preCounter) => preCounter+1)}>Increase Count</button>
    <button className='border' onClick={() => setCounter((preCounter) => preCounter+1)}>Increase Count</button>
    <button className='border' onClick={() => setCounter((preCounter) => preCounter+1)}>Increase Count</button>
    <button className='border' onClick={() => setCounter((preCounter) => preCounter+1)}>Increase Count</button>
   
    <button className='border ml-3' onClick={() => setCounter(counter-1)}>Decrease Count</button>
    </>
  )
}

export default Browse
