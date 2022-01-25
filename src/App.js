import logo from './logo.svg';
import './App.css';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import Tile from './components/Tile';
import NoTile from './components/NoTile';
import DrawTileMap from './components/DrawTileMap';
import tileMap from './components/tileMap';

function App() {

  return (
    <DrawTileMap />
  );
}

export default App;
