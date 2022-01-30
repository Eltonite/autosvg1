import React, { useState } from 'react';
import DrawBase from './DrawBase';
import DrawCoinMap from './DrawCoinMap';
import DrawPlayerMap from './DrawPlayerMap';
import DrawTileMap from './DrawTileMap';
import Player from './Player';
import tileMap from './tileMap';

function DrawWorld() {
  //x = 27 and y = 11 for fullscreen
  // x = 9 and y = 11 for halfscreen
  // x = 9 and y = 5 for 1/4 screen with console
  const baseX = 9;
  const baseY = 5;

  const array = tileMap(baseX,baseY);
  const coinGuideArray = array.slice();
  let playerPosInitial = coinGuideArray.slice();


  const layer0 = DrawBase(baseX,baseY);

  const layer1 = DrawTileMap(array);
  const layer2 = DrawCoinMap(coinGuideArray);

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
  
  const playerLayer = DrawPlayerMap(playerPosInitial);


  return(
      <div className='flex justify-center rounded-lg border-2 border-white'>
        <g className='relative z-1'>
          {layer1}</g>
        <g className='absolute z-2'>
          {layer2}
        </g>
        <g className='absolute z-3'>
          {playerLayer}
        </g> 
      </div>
  );
}

export default DrawWorld;
