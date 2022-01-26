import React from 'react';
import DrawCoinMap from './DrawCoinMap';
import DrawTileMap from './DrawTileMap';
import tileMap from './tileMap';

function DrawWorld() {

  let array = tileMap(10,10);
  const layer1 = DrawTileMap(array);
  const layer2 = DrawCoinMap(array);



  return(
    <div>
      <div className='lower-layer absolute'>{layer1}</div>
      <div className='mid-layer absolute'>{layer2}</div>
      
      
    </div>
  );
}

export default DrawWorld;
