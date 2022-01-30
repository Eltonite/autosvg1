import React, { useState } from 'react';
import DrawCoinMap from '../components/DrawCoinMap';
import DrawPlayerMap from '../components/DrawPlayerMap';
import DrawTileMap from '../components/DrawTileMap';
import tileMap from '../components/tileMap';

function DrawWorld2() {
  //x = 27 and y = 11 for fullscreen
  // x = 9 and y = 11 for halfscreen
  // x = 9 and y = 5 for 1/4 screen with console
  const baseX = 9;
  const baseY = 5;

  const array = tileMap(baseX,baseY);
  const coinGuideArray = array.slice();
  const playerPosInitial = coinGuideArray.slice();

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
  isPlaced = false;

  const [playerPos, setPlayerPos] = useState(playerPosInitial);
  
  const playerLayer = DrawPlayerMap(playerPos);



  const movePlayer = () => {
    console.log(playerPosInitial)
    const newPlayerPos = playerPosInitial.splice();
    let xCoord = 0;
    let didMove = false;

    newPlayerPos.map((item) => {
      if (!didMove){
        for (let i = 0; i < item.length; i++){
          if (xCoord === 3 && !didMove){
            item[i] = 2;
            xCoord = 0;
            didMove = true;
          }
          if (item[i] === 2 && !didMove){
            item[i] = 1;
            xCoord = 3;
          }
        }
      }
    })
    console.log(newPlayerPos)
    setPlayerPos(newPlayerPos)
  }




  return(
    <div className='flex flex-col'>
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

      <div className='flex justify-center p-2 m-2'>
        <button onClick={() => movePlayer()}>MOVE DOWN</button>
      </div>
    </div>
      
  );
}

export default DrawWorld2;
