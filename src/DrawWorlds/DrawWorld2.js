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


  const oldDiv = <div className='flex flex-col'>
  <div className=''>
    <div className='relative z-1'>
      <DrawTileMap mapArray={array} x={baseX} y={baseY} />
    </div>
  </div>
</div>

  return(
    <div>
      <DrawTileMap mapArray={array} x={baseX} y={baseY} />
    </div> 
  );
}

export default DrawWorld2;
