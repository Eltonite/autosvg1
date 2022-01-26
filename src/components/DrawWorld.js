import React from 'react';
import DrawCoinMap from './DrawCoinMap';
import DrawTileMap from './DrawTileMap';
import tileMap from './tileMap';

function DrawWorld() {

  let array = tileMap(20,10);
  const layer1 = DrawTileMap(array);

  let coinGuideArray = array.slice();
  const layer2 = DrawCoinMap(coinGuideArray);

  console.log(layer2)

  return(
      <div className='relative'>
        <div className='absolute z-1'>
          {layer1}</div>
      </div>
  );
}

export default DrawWorld;
