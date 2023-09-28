import { getMovieDetails, getMovieCredits } from '../../apiFunctions';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieDetails(movie_id).then(data => {
      setMovie(data);
    });
  }, []);
  return (
    <>
      <div className={css.header}>
        <img
          src={
            movie ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : ''
          }
          alt="Image not found"
          width="200"
          height="300"
        ></img>
        <div className={css.principalInfo}>
          <b>
            {movie
              ? movie.title + '(' + movie.release_date.substring(0, 4) + ')'
              : ''}
          </b>
          <p>User score {movie ? movie.vote_average * 10 + '%' : ''} </p>
          <b>Overview</b>
          <p>{movie ? movie.overview : ''}</p>
          <b>Genres</b>
          <br></br>
          <br></br>
          {movie
            ? movie.genres.map((genre, index) => {
                return <span key={index}>{genre.name + '  '}</span>;
              })
            : null}
        </div>
      </div>
      <hr></hr>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr></hr>
      <Outlet></Outlet>
    </>
  );
}
