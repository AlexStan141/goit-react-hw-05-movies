import { getMovieCredits } from 'apiFunctions';
import CastItem from 'components/CastItem/CastItem';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movie_id } = useParams();
  const [movieCredits, setMovieCredits] = useState([]);
  useEffect(() => {
    getMovieCredits(movie_id).then(data => {
      setMovieCredits(data.cast);
    });
  }, []);
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
