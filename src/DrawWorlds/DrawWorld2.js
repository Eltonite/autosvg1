import React, { useEffect, useState } from 'react';
import DrawCoinMap from '../components/DrawCoinMap';
import DrawPlayerMap from '../components/DrawPlayerMap';
import DrawTileMap from '../components/DrawTileMap';
import movePlayer from '../components/movePlayer';
import setPlayer from '../components/setPlayer';
import tileMap from '../components/tileMap';
import JustPlayer from '../PlayerStuff/JustPlayer';

function DrawWorld2() {
  //x = 27 and y = 11 for fullscreen
  // x = 9 and y = 11 for halfscreen
  // x = 9 and y = 5 for 1/4 screen with console
  const baseX = 9;
  const baseY = 11;
  const array = tileMap(baseX,baseY);


  // const initPosition = setPlayer(array);
  // const [playerPosArray, setPlayerPosArray] = useState(initPosition);
  // const layer1 = DrawTileMap(array);
  // const layer2 = DrawCoinMap(array);
  // const playerLayer = DrawPlayerMap(playerPosArray);


  // const layer1 = DrawTileMap(array);
  // const layer2 = DrawCoinMap(array);
  // const playerLayer = DrawPlayerMap(array);


  return(
    <div className='flex flex-col'>
      <div className='flex justify-center rounded-lg border-2 border-white'>
        <div className='relative z-1'>
          <DrawTileMap mapArray={array} />
        </div>
        <div className='absolute z-2'>
          <DrawCoinMap mapArray={array}/>
        </div>
        <div className='absolute z-3'>
          <DrawPlayerMap mapArray={array} />
        </div> 
      </div>

      <div className='flex justify-center p-2 m-2'>
        <button>MOVE DOWN</button>
      </div>
    </div>
      
  );
}

export default DrawWorld2;
