import React, { useEffect } from "react";
import useSelectedMovie from "../useSelectedMovie/useSelectedMovie";
import { useSelectedMovieID } from "../../context/DataContext";
import classes from "./Details.module.css";

function Details() {
  const { selectedMovieID } = useSelectedMovieID();
  const { selectedMovie } = useSelectedMovie(selectedMovieID);
  console.log(selectedMovie);
  return (
    selectedMovie && (
      <section className={classes.details}>
        <header>
          <img
            src={selectedMovie.Poster}
            alt={`${selectedMovie.Title} poster`}
          />
          <div className={classes["details-overview"]}>
            <h2>{selectedMovie.Title}</h2>
            <p>
              {selectedMovie.Released} &bull; {selectedMovie.Runtime}
            </p>
            <p>{selectedMovie.Genre}</p>
            <p>
              <span>⭐️</span>
              {selectedMovie.imdbRating} IMDB rating
            </p>
          </div>
        </header>

        <section>
          <p>{selectedMovie.Plot}</p>
          <p>{selectedMovie.Actors}</p>
          <p>{selectedMovie.Director}</p>
        </section>
      </section>
    )
  );
}

export default Details;
