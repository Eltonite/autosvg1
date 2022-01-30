import React, { useState } from 'react';
import DrawPlayerMap from '../components/DrawPlayerMap';

function JustPlayer(mainMapArray) {

  // const [playerPos, setPlayerPos] = useState(playerPosInitial);


  const playerLayer = DrawPlayerMap(mainMapArray);

  let newPosition;

  return(
    <a>
      {playerLayer}
    </a>
  ) 
}

export default JustPlayer;











const movePlayer = (someArray) => {
  const newPlayerPos = someArray.splice();
  console.log(newPlayerPos)
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
}