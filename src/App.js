import { useEffect, useState } from 'react';
import './App.css';
import DrawWorld from './components/DrawWorld';
import DrawWorld2 from './DrawWorlds/DrawWorld2';

function App() {
  const whichWorld = <DrawWorld2 />

  const [isHidden, setIsHidden] = useState(
    {
      css: "", 
      isTrue: false,
      text: "HIDE NFT"
    });

  const [theNFT, setTheNFT] = useState(whichWorld);

  const showNFT = () => {
    if(isHidden.isTrue){
      setIsHidden(
        {
          css: "", 
          isTrue: false,
          text: "HIDE NFT"
        }
        )}
    else {
      setIsHidden(
        {
          css: "hidden", 
          isTrue: true,
          text: "SHOW NFT"
        })}
  }

  const generateNFT = () => {
    setTheNFT(whichWorld);
  }

  return (
    <div className='h-screen bg-black flex flex-col gap-4 p-3 text-white'>

      <button onClick={()=>{showNFT()}}>{isHidden.text}</button>

      <button onClick={()=>{generateNFT()}}>{"GENERATE NFT"}</button>

      <div className= {isHidden.css}>
        {theNFT}
      </div>
      
    </div>
  );
}

export default App;
