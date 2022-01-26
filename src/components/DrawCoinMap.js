import React from 'react';
import Coin from './Coin';

export default function DrawCoinMap() {

  const arraySimple = [0,0,0,0,0,0,0]
  const tileArray =[];

  let MapTile = (drawArray) => {
    const someArray = [];

    drawArray.map((item) => {
      if (item === 0){
        someArray.push(<Coin />)
      }
    })
    // tileArray.push(someArray)
    tileArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  }

  MapTile(arraySimple);

  return(
    <div className='h-full p-5 flex flex-col'>
      {tileArray}
    </div>
  )
}
