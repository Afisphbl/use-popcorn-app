import React, { memo } from "react";
import classes from "../Movie__list/MovieList.module.css";

function WatchedMovies({ watchedMovies }) {
  return (
    <ul className={`${classes.list} ${classes["list-movies"]}`}>
      {watchedMovies.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>

          <div>
            <p>⭐️{movie.userRating}</p>
            <p>🌟{movie.imdbRating}</p>
            <p>⏳{movie.Runtime}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default memo(WatchedMovies);
