import { lazy } from 'react';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

export default function Home() {
  return <MoviesList></MoviesList>;
}
