import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiService } from '../../services/ApiService';
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
        <Row>
        {movies.length && movies.map(movie => {
        return (
            <MovieCard key={movie.id} movie={movie} />
        );
      })}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList
