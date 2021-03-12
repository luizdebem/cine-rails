import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiService } from '../../services/ApiService';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const res = await new ApiService().getMovies();
    setMovies(res.data);
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
