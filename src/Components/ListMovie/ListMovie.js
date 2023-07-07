import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./ListMovies.css"

const ListMovie = ({movies , inputSearch}) => {
  return (
    <div className='movies-container'>
      {movies
      .filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase()))
      .map( movie => <MovieCard movie={movie} key={movie.id}/> )}
    </div>
  )
}

export default ListMovie
