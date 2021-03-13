import React, { useEffect, useState } from 'react'
import qs from 'qs';
import MovieCard from '../MovieCard/MovieCard';
import { ApiService } from '../../services/ApiService';

const SearchPage = (props) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  async function fetchMovie() {
    const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });
    const title = query.title;
    try {
      const res = await new ApiService().getMovieByTitle(title);
      console.log('asd')
      setMovie(res.data);
    } catch(err) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
    {movie != null && <MovieCard movie={movie}></MovieCard>}
    {error && <div><h1 style={{ color: 'white', margin: '25px' }}>Filme não encontrado :(</h1></div>}
    </>
  )
}

export default SearchPage
