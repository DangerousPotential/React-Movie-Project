import React, { useState } from 'react'
import './App.css';
import SearchIcon from './search.svg'
import { useEffect } from 'react';
import MovieCard from './MovieCard';

// Generate API Key from: https://www.omdbapi.com/apikey.aspx
const API_URL = "https://www.omdbapi.com?apikey=(insert yours here)"




const App = () =>{
    const [movies, setmovies] = useState([])
    const [searchterm, setsearchterm] = useState("")
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setmovies(data.Search)
    }
    useEffect(() => {
        searchMovies('Spiderman')
    }, [])
    return(
    <div classname="app"> 
        <h1> Movie Search Up </h1>
    <div className='search'>
        <input
        placeholder='Search for Movies'
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
        />
        <img
        src= {SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchterm)}
        />
    </div>

    { movies?.length > 0
        ? (
            <div className='container'>
            {movies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
            </div>
        ) :(
            <div className='empty'>
                <h2> No Movies Found </h2>
                </div>
        )}


    </div>

    );
}
export default App;