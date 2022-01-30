import React from 'react';
import EmptyTile from './EmptyTile';
import movePlayer from './movePlayer';
import Player from './Player';
import setPlayer from './setPlayer';

function DrawPlayerMap(mapArray) {

  const playerStart = mapArray;
  const playerPosArray = setPlayer(playerStart);
  
  
  // const playerPosArray = [];
  // let isPlaced = false;
  // playerStart.map((arr) => {
  //   let rowCoinArray = [];


  //   arr.map((item)=> {
  //     if (item === 0){
  //       rowCoinArray.push(0);
  //     } 
  //     else if (item === 1){
  //       const CoinYes = Math.floor(Math.random()*3)
  //       if (CoinYes == 1 && !isPlaced){
  //         rowCoinArray.push(1);
  //         isPlaced = true;
  //       }
  //       else{
  //         rowCoinArray.push(0);
  //       }
  //     } 
  //   })
  //   playerPosArray.push(rowCoinArray)
  // })






  // const playerComponentArray = [];

  // let MapTile = (drawArray) => {
  //   const someArray = [];

  //   drawArray.map((item) => {
  //     if (item === 1){
  //       someArray.push(<Player />)
  //     }
  //     else if (item === 0){
  //       someArray.push(<EmptyTile />)
  //     }
  //   })
  //   // tileArray.push(someArray)
  //   playerComponentArray.push(
  //     <div className='flex flex-row justify-center'>
  //       {someArray}
  //     </div>
  //   )
  // }

  // playerPosArray.map((item) => {
  //   MapTile(item)
  // })


  // console.log(playerPosArray)
  // movePlayer(playerPosArray)

  // return(
  //   <div className='h-full p-5 flex flex-col'>
  //     {playerComponentArray}
  //   </div>
  // )

  return createPlayerComp(playerPosArray);

}

export default DrawPlayerMap;



const createPlayerComp = (posArray) => {
  const playerCompArray = [];
  posArray.map((rowArray) => {
    const someArray = [];
    rowArray.map((item) => {
      if (item === 1){
        someArray.push(<Player />)
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }
    })
    playerCompArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  })

  return(
    <div className='h-full p-5 flex flex-col'>
      {playerCompArray}
    </div>
  )
}