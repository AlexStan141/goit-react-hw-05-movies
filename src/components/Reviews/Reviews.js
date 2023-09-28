import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'apiFunctions';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movie_id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movie_id).then(data => {
      setMovieReviews(data.results);
    });
  }, [movie_id]);
  return (
    <ul>
      {movieReviews.length > 0 ? (
        movieReviews.map(review => {
          return (
            <li>
              <b>Author: {review.author}</b>
              <p>{review.content}</p>
            </li>
          );
        })
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
}
