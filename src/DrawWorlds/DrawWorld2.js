import React, { useEffect, useState } from 'react';
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
    </div>
      
  );
}

export default DrawWorld2;
