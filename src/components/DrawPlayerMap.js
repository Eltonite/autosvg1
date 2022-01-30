import React from 'react';
import EmptyTile from './EmptyTile';
import Player from './Player';

function DrawPlayerMap(mapArray) {

  const playerStart = mapArray;

  const playerArray = [];

  let MapTile = (drawArray) => {
    const someArray = [];

    drawArray.map((item) => {
      if (item === 1){
        someArray.push(<EmptyTile />)
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }
      else if (item === 2){
        someArray.push(<Player />)
      }
    })
    // tileArray.push(someArray)
    playerArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  }

  playerStart.map((item) => {
    MapTile(item)
  })

  return(
    <g className='h-full p-5 flex flex-col'>
      {playerArray}
    </g>
  )
}

export default DrawPlayerMap;
