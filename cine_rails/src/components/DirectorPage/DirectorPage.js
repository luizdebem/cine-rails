import React, { useState, useEffect } from 'react'
import MovieCard from '../MovieCard/MovieCard';

const DirectorPage = (props) => {
  const [director, setDirector] = useState([]);

  async function fetchDirector() {
    const id = props.match.params.id;
    const res = await fetch(`http://localhost:3000/directors/${id}`);
    const director = await res.json();
    setDirector(director);
    console.log(director);
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
