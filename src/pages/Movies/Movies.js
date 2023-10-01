import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [intermediateQuery, setIntermediateQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = evt => {
    const { name, value } = evt.target;
    console.log(name);
    setIntermediateQuery(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ searchQuery: intermediateQuery });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button type="submit">Search</button>
      </form>
      {searchParams.get('searchQuery') ? (
        <MoviesList searchQuery={searchParams.get('searchQuery')}></MoviesList>
      ) : (
        <></>
      )}
    </>
  );
}
