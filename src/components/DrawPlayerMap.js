import React, { useEffect, useState } from 'react';
import EmptyTile from './EmptyTile';
import movePlayer from './movePlayer';
import Player from './Player';
import setPlayer from './setPlayer';

function DrawPlayerMap(props) {

  const playerArray = setPlayer(props.mapArray);

  const [playerPosArray, setPlayerPosArray] = useState(playerArray);

  const element = createPlayerComp(playerPosArray);
  let numMoves = 0;


  const [downKey, setDownKey] = useState([]);

  const onKeyDown = (e) => {
    console.log(e.code);
    if (e.code === "KeyW"){
      console.log(e.code)
      setPlayerPosArray(movePlayer(playerPosArray));
      document.removeEventListener('keydown', onKeyDown);
    };
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

  }, [element])

  

  return (
    <div>
      {element}
    </div>
  ) 
  
}
export default DrawPlayerMap;



const createPlayerComp = (posArray) => {
  const playerCompArray = [];
  posArray.map((rowArray) => {
    const someArray = [];
    rowArray.map((item) => {
      if (item === 1){
        someArray.push(
            <Player />
        )
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }})
    playerCompArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )})
  return(
    <div className='h-full p-5 flex flex-col'>
      {playerCompArray}
    </div>
  )
}