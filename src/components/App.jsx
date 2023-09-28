import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/goit-react-hw-05-movies"
          element={<SharedLayout></SharedLayout>}
        >
          <Route index element={<Home></Home>}></Route>
          <Route path="movies" element={<Movies></Movies>}></Route>
          <Route
            path="movies/:movie_id"
            element={<MovieDetails></MovieDetails>}
          >
            <Route path="cast" element={<Cast></Cast>}></Route>
            <Route path="reviews" element={<Reviews></Reviews>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
