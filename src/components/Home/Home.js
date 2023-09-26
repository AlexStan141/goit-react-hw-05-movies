import React from 'react';
import { getTrending } from 'apiFunctions';
import { Link } from 'react-router-dom';

async function getMovies() {
  var movies = await getTrending('day');
  return movies.results;
}

export default function Home() {
  getMovies().then(response => {
    response.map(movie => {
      return <p>{movie.title}</p>;
    });
  });
}
