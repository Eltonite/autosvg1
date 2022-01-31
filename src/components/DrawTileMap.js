import React, { useEffect, useMemo } from 'react';
import { useState } from 'react/cjs/react.development';
import DrawCoinMap from './DrawCoinMap';
import NoTile from './NoTile';
import Tile from './Tile';
import tileMap from './tileMap';

export default function DrawTileMap(props) {

  const baseX = props.x;
  const baseY = props.y;
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

  }, [tileArray])





  
  const CoinMap = useMemo(() => {
    return <DrawCoinMap mapArray={props.mapArray} />
  }, [])


  return (
    <div className='flex justify-center rounded-lg border-2 border-white'>
      <div className='relative z-1'>
        {element}
      </div>
      <div className='absolute z-2'>
        {CoinMap}
      </div>
    </div>
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

