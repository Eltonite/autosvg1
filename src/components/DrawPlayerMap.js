import React from 'react';
import EmptyTile from './EmptyTile';
import Player from './Player';

function DrawPlayerMap(mapArray) {

  const playerStart = mapArray;
  const playerPosArray = [];

  
  let isPlaced = false;
  playerStart.map((arr) => {
    let rowCoinArray = [];


    arr.map((item)=> {
      if (item === 0){
        rowCoinArray.push(0);
      } 
      else if (item === 1){
        const CoinYes = Math.floor(Math.random()*3)
        if (CoinYes == 1 && !isPlaced){
          rowCoinArray.push(1);
          isPlaced = true;
        }
        else{
          rowCoinArray.push(0);
        }
      } 
    })
    playerPosArray.push(rowCoinArray)
  })


  const playerArray = [];

  let MapTile = (drawArray) => {
    const someArray = [];

    drawArray.map((item) => {
      if (item === 1){
        someArray.push(<Player />)
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }
    })
    // tileArray.push(someArray)
    playerArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  }

  playerPosArray.map((item) => {
    MapTile(item)
  })


  console.log(playerPosArray)
  return(
    <g className='h-full p-5 flex flex-col'>
      {playerArray}
    </g>
  )
}

export default DrawPlayerMap;
