import React from 'react';
import Coin from './Coin';
import EmptyTile from './EmptyTile';
import NoTile from './NoTile';

export default function DrawCoinMap(array) {

  const arrayStart = array;
  const coinArray = [];

  arrayStart.map((arr) => {
    let rowCoinArray = [];
    arr.map((item)=> {
      if (item === 0){
        rowCoinArray.push(0);
      } 
      else if (item === 1){

        const CoinYes = Math.floor(Math.random()*9)
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

  const tileArray =[];

  let MapTile = (drawArray) => {
    const someArray = [];

    drawArray.map((item) => {
      if (item === 1){
        someArray.push(<Coin />)
      }
      else if (item === 0){
        someArray.push(<EmptyTile />)
      }
    })
    // tileArray.push(someArray)
    tileArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )
  }

  coinArray.map((item) => {
    MapTile(item)
  })

  console.log(coinArray)
  return(
    <g className='h-full p-5 flex flex-col'>
      {tileArray}
    </g>
  )
}
