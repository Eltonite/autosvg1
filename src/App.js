import { useEffect, useState } from 'react';
import './App.css';
import DrawWorld from './components/DrawWorld';
import WinWindow from './components/WinWindow';
import DrawWorld2 from './DrawWorlds/DrawWorld2';

function App() {
  const whichWorld = <DrawWorld2 />

  const [isHidden, setIsHidden] = useState(
    {
      css: "hidden", 
      isTrue: true,
      text: "SHOW NFT"
    }
    );

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
        }
        )}
  }

  const generateNFT = () => {
    setTheNFT(<DrawWorld2 />);
  }

  const [btnString, setBtnString] = useState("START GAME")

  return (
    <div className='h-screen bg-black flex flex-col gap-4 p-3 text-white'>

      

      <button onClick={()=>{
        setBtnString("COLLECT EM ALL!")
        showNFT();

        }} className='border-purple-300 bg-purple-800 border-4 rounded-2xl py-2 px-5 flex flex-row justify-center'>{btnString}

        
        
        </button>

      <div className= {isHidden.css}>
        {theNFT}
      </div>
      
    </div>
  );
}

export default App;
