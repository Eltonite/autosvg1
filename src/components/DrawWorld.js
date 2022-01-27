import React, { useState } from 'react';
import DrawCoinMap from './DrawCoinMap';
import DrawPlayerMap from './DrawPlayerMap';
import DrawTileMap from './DrawTileMap';
import Player from './Player';
import tileMap from './tileMap';

function DrawWorld() {

  const array = tileMap(5,7);
  const coinGuideArray = array.slice();

  const layer1 = DrawTileMap(array);
  const layer2 = DrawCoinMap(coinGuideArray);

  
  let playerPosInitial = coinGuideArray.slice();

  let isPlaced = false;
  playerPosInitial.map((item) => {
    if (!isPlaced){
      for (let i = 0; i < item.length; i++){
        if (item[i] === 1 && !isPlaced){
          item[i] = 2;
          isPlaced = true;
        }
      }
    }
  })


  const {playerPos, setPlayerPos} = useState(playerPosInitial);
  console.log(playerPosInitial)

  
  const playerLayer = DrawPlayerMap(playerPosInitial);


  return(
      <div className='flex justify-center'>
        <div className='absolute z-1'>
          {layer1}</div>
        <div className='absolute z-2'>
          {layer2}
        </div>
        <div className='absolute z-3'>
          {playerLayer}
        </div>
          
      </div>
  );
}

export default DrawWorld;
