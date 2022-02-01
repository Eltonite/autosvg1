import React, { useMemo} from 'react';
import { useState } from 'react/cjs/react.development';
import Coin from './Coin';
import DrawPlayerMap from './DrawPlayerMap';
import EmptyTile from './EmptyTile';
import NoTile from './NoTile';
import WinWindow from './WinWindow';


function DrawCoinMap(props) {

  const arrayStart = props.mapArray;
  //const coinArray = buildCoinArray(arrayStart);
  const [coinArray, setCoinArray] = useState(buildCoinArray(arrayStart))

  const [score, setScore] = useState(0);
  
  const tileArray = coinMapTile(coinArray);

  const [childPlayer, setChildPlayer] = useState();
  const getPlayerArray = (childData) => {
    setChildPlayer(childData);
  }

  const PlayerMap = useMemo( () => {
    return <DrawPlayerMap mapArray={arrayStart} doFunction={getPlayerArray} />
  }, [])
  console.log(childPlayer)

  const coinElement = useMemo(() => {
    return <div className='h-full p-5 flex flex-col'>{tileArray}</div>
  }, [coinArray])
  console.log(coinArray)


  if (!(childPlayer === undefined)){
    const isCoinTaken = playerOnCoinArray(childPlayer,coinArray)
    console.log(isCoinTaken)

    if (!stringifyCompare(isCoinTaken, coinArray)){
      
      setCoinArray(isCoinTaken)
      setScore(score + 1)
      console.log('changed')
    }
    else{
      console.log('unchanged')
    }

  }

  console.log(score)

  console.log(JSON.stringify(coinArray))
  console.log(stringifyZero(coinArray))

  console.log(
    JSON.stringify(coinArray) === stringifyZero(coinArray)
  )
  if (JSON.stringify(coinArray) === stringifyZero(coinArray)){

    return (
      <div className='flex flex-col justify-center py-5'>
        <WinWindow />
      </div>
    )
    
  }
  

  return(
    <div>

      <div className='flex flex-col justify-center gap-5'>
        <div className='relative z-2'>
        {PlayerMap}
        </div>
        <div className='absolute top-0 z-2'>
          {coinElement}
        </div>

        <div className='flex flex-row justify-center'>
          <Coin />
          <div className='text-white text-4xl'>{score}</div>
          <Coin />
        </div>
        
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


const playerOnCoinArray = (playerArray, coinArray) => {
  const player = JSON.stringify(playerArray);
  const coin = JSON.stringify(coinArray);
  console.log(player)
  console.log(coin)

  console.log(player.length)
  console.log(coin.length)

  let newArray = '';

  for (let i = 0; i < player.length; i++){
    if(player[i] === '1' && coin[i] === '1'){
      newArray += '0';
      console.log("FOUND A COIN!!!")
    }
    else {
      newArray += coin[i];
    }
  }

  return JSON.parse(newArray);
}


const stringifyCompare = (array1, array2) => {

  const string1 = JSON.stringify(array1);
  const string2 = JSON.stringify(array2);

  if (string1 === string2){
    return true;
  }
  else{
    return false;
  }

}

const stringifyZero = (array) => {
  const theArray = JSON.stringify(array);
  let arrayToZeros = '';

  for (let i = 0; i < theArray.length; i++){
    if(theArray[i] === '1' || theArray[i] === '0'){
      arrayToZeros += '0';
    }
    else {
      arrayToZeros += theArray[i];
    }
  }

  return(arrayToZeros);
}