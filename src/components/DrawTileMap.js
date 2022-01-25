import React from 'react';
import NoTile from './NoTile';
import Tile from './Tile';
import tileMap from './tileMap';

function DrawTileMap() {
  const thearray1 = tileMap();
  let tileArray = [];

  let MapTile = (drawArray) => {
    const someArray = [];

    drawArray.map((item) => {
      if (item === 1){
        someArray.push(<Tile />)
      }
      else if (item === 0){
        someArray.push(<NoTile />)
      }
    })
    // tileArray.push(someArray)
    tileArray.push(
      <div className='flex flex-row'>
        {someArray}
      </div>
    )
  }

  thearray1.map((item) => {
    MapTile(item)
  })



  return (
    <div className="h-screen bg-slate-400 p-5 flex flex-col">
      {tileArray}
    </div>
  )
}

export default DrawTileMap;
