import React from 'react';
import { getTrending } from 'apiFunctions';

export default async function Home() {
  var movies = await getTrending('day');
  console.log(movies);
  movies.results.map(movie => {
    return <p>{movie.title}</p>;
  });
}
