import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Home from './Home/Home';
import Movies from './Movies/Movies';

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
        </Route>
      </Routes>
    </>
  );
};
