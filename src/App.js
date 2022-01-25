import logo from './logo.svg';
import './App.css';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import Tile from './components/Tile';
import NoTile from './components/NoTile';
import DrawTileMap from './components/DrawTileMap';
import tileMap from './components/tileMap';

function App() {

  const letterMatrix = [0,1,1,1,0]
  const lettermatrixMap = [
    [0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0]
  ]
  const testingArray = tileMap();
  console.log(testingArray)
  let tileArray = [];

  // letterMatrix.map((item) => {
  //   if (item === 1){
  //     tileArray.push(<Tile />)
  //   }
  //   else if (item === 0){
  //     tileArray.push(<NoTile />)
  //   }
  // })

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

  lettermatrixMap.map((item) => {
    MapTile(item)
  })


  return (
    <DrawTileMap />
  );
}

export default App;
