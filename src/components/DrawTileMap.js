import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import NoTile from './NoTile';
import Tile from './Tile';
import tileMap from './tileMap';

export default function DrawTileMap(props) {

  const baseX = 9;
  const baseY = 5;
  const randomTileArray = tileMap(baseX,baseY);

  console.log(props.mapArray)

  const [tileArray, setTileArray] = useState(props.mapArray);

  const element = createTileComp(tileArray)


  const onKeyDown = (e) => {
    if (e.code === "ShiftRight"){
      console.log(e.code)
      setTileArray(randomTileArray);
      document.removeEventListener('keydown', onKeyDown);
    }
    else if (e.code === "ShiftLeft"){
      console.log(e.code)
      setTileArray(randomTileArray);
      document.removeEventListener('keydown', onKeyDown);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

  }, [element])



  
  return (
    <div>{element}</div>
  )
}




const createTileComp = (posArray) => {
  const tileCompArray = [];
  posArray.map((rowArray) => {
    const someArray = [];
    rowArray.map((item) => {
      if (item === 1){
        someArray.push(
            <Tile />
        )
      }
      else if (item === 0){
        someArray.push(<NoTile />)
      }})
    tileCompArray.push(
      <div className='flex flex-row justify-center'>
        {someArray}
      </div>
    )})
  return(
    <div className='h-full p-5 flex flex-col'>
      {tileCompArray}
    </div>
  )
}
