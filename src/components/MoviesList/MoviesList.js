import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map((movie, index) => {
        var link = '/goit-react-hw-05-movies/movies/' + movie.id;
        return (
          <li key={index}>
            <Link to={link}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
