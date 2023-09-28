import React from 'react';
import default_profile_path from '../../assets/default_profile_path.png';
import css from './CastItem.module.css';

export default function CastItem({ actor }) {
  return (
    <div className={css.cast}>
      <img
        alt="Image not found"
        src={
          actor.profile_path
            ? 'https://image.tmdb.org/t/p/w500' + actor.profile_path
            : default_profile_path
        }
        width="60"
        height="100"
      ></img>
      <div className={css.actorInfo}>
        <p>
          <b>Name:</b> {actor.name}
        </p>
        <p>
          <b>Character:</b> {actor.character}
        </p>
      </div>
    </div>
  );
}
