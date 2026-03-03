import React, { useEffect, useState } from "react";
import { useSelectedMovieID } from "../../context/DataContext";
import StarRating from "../StarRating/StarRating";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import { API_KEY, URL } from "../useMovie/useMovies";
import classes from "./Details.module.css";

function Details() {
  const [userRating, setUserRating] = useState(0);
  const { selectedMovieID } = useSelectedMovieID();
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      if (!selectedMovieID) return;
      const res = await fetch(`${URL}?apikey=${API_KEY}&i=${selectedMovieID}`);
      const data = await res.json();
      setSelectedMovie(data);
    }
    getMovieDetails();
  }, [selectedMovieID]);

  useEffect(() => {
    setUserRating(0);
  }, [selectedMovieID]);

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
          <StarRating
            key={selectedMovieID}
            maxRating={10}
            size={24}
            onSetRating={setUserRating}
          />

          {userRating > 0 && (
            <Button class__name={classes["btn-add"]}>
              <Plus size={16} />
              Add to watchlist
            </Button>
          )}
          <p>{selectedMovie.Plot}</p>
          <p>{selectedMovie.Actors}</p>
          <p>{selectedMovie.Director}</p>
        </section>
      </section>
    )
  );
}

export default Details;
