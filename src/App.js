import React, { useEffect, useState } from 'react';
import Movie from './components/movie';

const KEY_API = "4a3df646f07f4da444876af8342211e9"
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key="+ KEY_API +"&sort_by=popularity.desc&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/company?api_key="+ KEY_API +"&page=1&query="

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() =>{
    getMovies(FEATURED_API);
  }, [])

  const getMovies = (API) =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API + searchTerm)
      setSearchTerm("");
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return(
    <div>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
            className='search' 
            type="search" 
            placeholder='Search...' 
            value={searchTerm} 
            onChange={handleOnChange} 
          />
        </form>
        
      </header>
      <div>
        {movies.length > 0 && movies.map((movie) => 
          <Movie key={movie.id} {...movie} />
        )}
      </div>
    </div>
  )
};

export default App;