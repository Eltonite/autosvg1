import React, { useEffect, useState } from 'react';
import DrawCoinMap from './DrawCoinMap';
import EmptyTile from './EmptyTile';
import movePlayerDirs from './movePlayerDirs';
import Player from './Player';
import setPlayer from './setPlayer';

function DrawPlayerMap(props) {

  const playerArray = setPlayer(props.mapArray);
  console.log(props.mapArray)

  const [playerPosArray, setPlayerPosArray] = useState(playerArray);

  const element = createPlayerComp(playerPosArray);

  // const [downKey, setDownKey] = useState([]);

  const onKeyDown = (e) => {
    console.log(e.code);
    if (e.code === "KeyW"){
      console.log(e.code)
      setPlayerPosArray(movePlayerDirs(playerPosArray, 'up'));
      document.removeEventListener('keydown', onKeyDown);
    }
    else if (e.code === "KeyS"){
      console.log(e.code)
      setPlayerPosArray(movePlayerDirs(playerPosArray, 'down'));
      document.removeEventListener('keydown', onKeyDown);
    }
    else if (e.code === "KeyA"){
      console.log(e.code)
      setPlayerPosArray(movePlayerDirs(playerPosArray, 'left'));
      document.removeEventListener('keydown', onKeyDown);
    }
    else if (e.code === "KeyD"){
      console.log(e.code)
      setPlayerPosArray(movePlayerDirs(playerPosArray, 'right'));
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keydown', onKeyDown);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

  }, [element])

  

  console.log(playerPosArray);


  props.playerArrayFunc(playerPosArray);
  
  return (

    <div className='flex justify-center'>
      <div className='relative z-1'>
      {element}
      </div>
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