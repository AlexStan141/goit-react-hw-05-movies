import React, { useEffect, useState } from 'react';
import { getTrending } from '../../apiFunctions';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrending('day').then(data => {
      setMovies(data.results);
    });
  }, []);
  return <MoviesList movies={movies}></MoviesList>;
}
