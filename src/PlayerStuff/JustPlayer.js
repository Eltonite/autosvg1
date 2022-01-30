import React, { useState } from 'react';
import DrawPlayerMap from '../components/DrawPlayerMap';
import movePlayer from '../components/movePlayer';

function JustPlayer(mainMapArray) {

  // const [playerPos, setPlayerPos] = useState(playerPosInitial);

  let currentArray = mainMapArray;
  console.log(mainMapArray)
  let newPosition = movePlayer(mainMapArray);


  const playerLayer = DrawPlayerMap(newPosition);



  return(
    <div>
      {playerLayer}
    </div>
  ) 
}

export default JustPlayer;








