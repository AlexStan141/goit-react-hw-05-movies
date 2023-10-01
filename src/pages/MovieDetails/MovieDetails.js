import { getMovieDetails } from 'apiFunctions';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const location = useLocation();
  const { movie_id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieDetails(movie_id).then(data => {
      setMovie(data);
    });
  }, [movie_id]);
  return (
    <>
      <Link
        to={
          location.state.searchQuery
            ? '/goit-react-hw-05-movies/movies?searchQuery=' +
              location.state.searchQuery
            : '/goit-react-hw-05-movies'
        }
      >
        {'<- Go back'}
      </Link>
      <div className={css.header}>
        <img
          src={
            movie ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path : ''
          }
          alt="Not found"
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
            <Link to="cast" state={{ searchQuery: location.state.searchQuery }}>
              Cast
            </Link>
          </li>
          <br></br>
          <li>
            <Link
              to="reviews"
              state={{ searchQuery: location.state.searchQuery }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr></hr>
      <Outlet></Outlet>
    </>
  );
}
