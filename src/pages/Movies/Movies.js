import React from 'react';
import css from './Movies.module.css';

export default function Movies() {
  return (
    <form className={css.form}>
      <input type="text" name="movie"></input>
      <button>Search</button>
    </form>
  );
}
