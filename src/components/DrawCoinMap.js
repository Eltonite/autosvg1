import React, { useMemo } from 'react';
import { useState } from 'react/cjs/react.development';
import Coin from './Coin';
import DrawPlayerMap from './DrawPlayerMap';
import EmptyTile from './EmptyTile';
import NoTile from './NoTile';

function DrawCoinMap(props) {

  const arrayStart = props.mapArray;


  // const coinArray = [];
  // arrayStart.map((arr) => {
  //   let rowCoinArray = [];
  //   arr.map((item)=> {
  //     if (item === 0){
  //       rowCoinArray.push(0);
  //     } 
  //     else if (item === 1){
  //       const CoinYes = Math.floor(Math.random()*3)
  //       if (CoinYes == 1){
  //         rowCoinArray.push(1)
  //       }
  //       else{
  //         rowCoinArray.push(0);
  //       }
  //     } 
  //   })
  //   coinArray.push(rowCoinArray)
  // })
  const coinArray = buildCoinArray(arrayStart);




  // const tileArray =[];
  // const MapTile = (drawArray) => {
  //   const someArray = [];

  //   drawArray.map((item) => {
  //     if (item === 1){
  //       someArray.push(<Coin />)
  //     }
  //     else if (item === 0){
  //       someArray.push(<EmptyTile />)
  //     }
  //   })
  //   tileArray.push(
  //     <div className='flex flex-row justify-center'>
  //       {someArray}
  //     </div>
  //   )
  // }
  // coinArray.map((item) => {
  //   MapTile(item)
  // })
  const tileArray = coinMapTile(coinArray);

  








  const [childPlayer, setChildPlayer] = useState();

  const getPlayerArray = (childData) => {
    setChildPlayer(childData);
  }


  const PlayerMap = useMemo(() => {
    return <DrawPlayerMap mapArray={props.mapArray} doFunction={getPlayerArray} />
  }, [])

  console.log(childPlayer)


  console.log(coinArray)
  const element = useMemo(() => {
    return <div className='h-full p-5 flex flex-col'>{tileArray}</div>
  }, [])
  
  


  return(
    <div className='flex justify-center'>
      <div className='absolute z-2'>
        {PlayerMap}
      </div>
      <div className='absolute z-2'>
        {element}
      </div>
    </div>  
  )
}

export default DrawCoinMap;





const buildCoinArray = (initArray) => {
  const coinArray = [];
  initArray.map((arr) => {
    let rowCoinArray = [];
    arr.map((item)=> {
      if (item === 0){
        rowCoinArray.push(0);
      } 
      else if (item === 1){
        const CoinYes = Math.floor(Math.random()*3)
        if (CoinYes == 1){
          rowCoinArray.push(1)
        }
        else{
          rowCoinArray.push(0);
        }
      } 
    })
    coinArray.push(rowCoinArray)
  })
  return coinArray;
}



const coinMapTile = (coinArray) => {

  const tileArray = [];
  coinArray.map((row) => {
    const someArray = [];
    row.map((item) => {
      if (item === 1){
        someArray.push(<Coin />)
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }
    })
    tileArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  })
  return tileArray;
}
