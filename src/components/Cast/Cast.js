import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'apiFunctions';
import { useState, useEffect } from 'react';
import CastItem from 'components/CastItem/CastItem';

export default function Cast() {
  const { movie_id } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);
  useEffect(() => {
    getMovieCredits(movie_id).then(data => {
      setMovieCredits(data.cast);
    });
  }, [movie_id]);
  return (
    <>
      {movieCredits ? (
        movieCredits.map((actor, index) => {
          return <CastItem key={index} actor={actor}></CastItem>;
        })
      ) : (
        <></>
      )}
    </>
  );
}
