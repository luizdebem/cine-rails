import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard';
import { ApiService } from '../../services/ApiService';
const DirectorPage = (props) => {
  const [director, setDirector] = useState([]);

  async function fetchDirector() {
    const id = props.match.params.id;
    const res = await new ApiService().getDirectorById(id);
    setDirector(res.data);
  }

  useEffect(() => {
    fetchDirector();
  }, []);

  return (
    <>
      {director.movies && <div>
        <h1 style={{ color: 'white', margin: '25px' }}>Filmes dirigidos por {director.name}</h1>

        <div className="movie-list-container">
          {director.movies && director.movies.length && director.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>

      </div>}
      {director.error && <div><h1 style={{ color: 'white', margin: '25px' }}>Diretor não encontrado :(</h1></div>}
    </>
  );
}

export default DirectorPage
