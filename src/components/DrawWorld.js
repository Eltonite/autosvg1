import React from 'react';
import DrawTileMap from './DrawTileMap';
import tileMap from './tileMap';

function DrawWorld() {

  const array = tileMap(5,10);
  const layer1 = DrawTileMap(array);



  return(
    <div>
      {layer1}
    </div>
  );
}

export default DrawWorld;
