import logo from './logo.svg';
import './App.css';
import { Card } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import InputCard from './components/InputCard';
import MyAppBar from './components/AppBar';
import { useState } from 'react';
import SquareCard from './components/SquareCard';
import CubeCard from './components/CubeCard';
import FibonacciCard from './components/FibonacciCard';
import FavoritesCard from './components/FavoritesCard';
const mdTheme = createTheme();
function App() {
  const [inputVal, setInputVal] = useState(0)
  const [favorites, setFavorites] = useState([])
  return (
    <ThemeProvider theme={mdTheme}>
      <div className="App">
        <header id="pageHeader">
          <MyAppBar></MyAppBar>
        </header>
        <div id="mainArticle">
          <div className='row1'>
            <div><InputCard value={inputVal} 
                            onChange={setInputVal} 
                            isFavorite={favorites.includes(inputVal)}
                            onFavouriteClick={(num) => {
              const fav = [...favorites]
              if(fav.indexOf(num) !== -1){
                fav.splice(favorites.indexOf(num),1)
              } else{
                fav.push(num)
              }
              setFavorites([...fav])
            }}></InputCard></div>
            <div><FavoritesCard onSelect={setInputVal} 
                                select={inputVal}
                                values={favorites}></FavoritesCard></div>
          </div>
          <div className='row2'>
            <div><SquareCard value={inputVal}></SquareCard></div>
            <div><CubeCard value={inputVal}></CubeCard></div>
            <div><FibonacciCard value={inputVal}></FibonacciCard></div>
          </div>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
