import { useEffect } from 'react';
import axios from 'axiox';
import { MovieCard } from './components/MovieCard/MovieCard';
import './App.css'

function App() {

  const getMovies = async () => {
      try{
        const data = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
        console.log (data);

      }catch(err) {
        console.log(err)
      }
  }

  useEffect (() => {
    getMovies();
  }, [])


  return (

    <div className= "App">
      <h1>Movies</h1>
      <MovieCard/>
      
    </div>
  )
}

export default App
