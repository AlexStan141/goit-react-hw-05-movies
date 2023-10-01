import { getTrending, getMovies } from 'apiFunctions';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MoviesList({ searchQuery }) {
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setMovieInfo(
        searchQuery ? await getMovies(searchQuery) : await getTrending('day')
      );
    }
    fetchData();
  }, [searchQuery]);

  return (
    <ul>
      {movieInfo &&
        movieInfo.results.map((movie, index) => {
          return (
            <li key={index}>
              <Link
                to={'/goit-react-hw-05-movies/movies/' + movie.id}
                state={{ searchQuery: searchQuery }}
              >
                {movie.title}
              </Link>
              <br></br>
            </li>
          );
        })}
    </ul>
  );
}
