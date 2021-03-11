import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const res = await fetch('http://localhost:3000/movies');
    const movies = await res.json();
    setMovies(movies);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list-container">
      {movies.length && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default MovieList
