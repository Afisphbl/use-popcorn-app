import React from "react";
import { useDataContext } from "../../context/DataContext";
import classes from "./MovieList.module.css";

function MovieList({ movies }) {
  const { updateSelectedMovieID } = useDataContext();
  return (
    <ul className={`${classes.list} ${classes["list-movies"]}`}>
      {movies.map((movie) => (
        <li
          key={movie.imdbID}
          onClick={() => updateSelectedMovieID(movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <h3>{movie.Title}</h3>

          <div>
            <p>{movie.Year}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
