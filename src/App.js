import { useEffect, useState } from 'react';
import './App.css';
import DrawWorld from './components/DrawWorld';

function App() {

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const [isHidden, setIsHidden] = useState(
    {
      css: "", 
      isTrue: false,
      text: "HIDE NFT"
    });

  const [theNFT, setTheNFT] = useState(<DrawWorld />);

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
    setTheNFT(<DrawWorld />);
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
