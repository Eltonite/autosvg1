import React from 'react';
import { useMoralis } from 'react-moralis';

function WinWindow() {

  const {authenticate, isAuthenticated} = useMoralis();

  return(
    <div>
      <div className='text-white text-center border-purple-300 border-4 rounded-2xl flex flex-col justify-center z-10 bg-black py-5'>
        <div className='py-3 px-5 text-5xl '>CONGRATS!</div>
        <div className='py-3 px-5 text-5xl '>YOU WON!</div>
        <div>
          <div className='pt-20'>CLICK TO MINT YOUR WINNING NFT</div>
        </div>
        <div className='pt-5'>
          <button 
          onClick={()=>{authenticate()}}
          className='border-purple-300 bg-purple-800 border-4 rounded-2xl py-2 px-5'>MINT</button>
        </div>
      </div>
    </div>
  )
}

export default WinWindow;
