import { useState } from 'react';
import './App.css';
import { moviesData } from './Components/Data/Data';
import ListMovies from "./Components/ListMovie/ListMovie"
import AddMovie from './Components/AddMovie/AddMovie';
import Filtermovie from './Components/FilterMovie/Filtermovie';

function App() {

  const [movies , setMovies] = useState(moviesData)
    
  const  [inputSearch , setInputSearch] = useState ("")

  const add = (newMovie) => {
    setMovies([...movies , newMovie])
  }
  return (
    <div className="App">
  

      <Filtermovie inputSearch ={inputSearch} setIinputSearch = {setInputSearch}/>

      <ListMovies  movies={movies} inputSearch={inputSearch}/>
      
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
