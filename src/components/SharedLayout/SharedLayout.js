import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  margin-left: 15px;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export default function SharedLayout() {
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink to="/goit-react-hw-05-movies" end>
            Home
          </StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
}
