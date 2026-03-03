import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import StarRating from "../StarRating/StarRating";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import { API_KEY, URL } from "../useMovie/useMovies";
import classes from "./Details.module.css";

function Details() {
  const [userRating, setUserRating] = useState(0);
  const { selectedMovieID, addWatchedMovie, watchedMovies } = useDataContext();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [addedToWatched, setAddedToWatched] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      if (!selectedMovieID) return;
      const searchMovieWatchedList = watchedMovies.find(
        (movie) => movie.imdbID === selectedMovieID,
      );

      if (searchMovieWatchedList) {
        setSelectedMovie(searchMovieWatchedList);
        return;
      }

      const res = await fetch(`${URL}?apikey=${API_KEY}&i=${selectedMovieID}`);
      const data = await res.json();
      setSelectedMovie(data);
    }
    getMovieDetails();
  }, [selectedMovieID, watchedMovies]);

  useEffect(() => {
    setUserRating(0);
    const searchMovieWatchedList = watchedMovies.find(
      (movie) => movie.imdbID === selectedMovieID,
    );
    if (searchMovieWatchedList) {
      setUserRating(searchMovieWatchedList.userRating);
      setAddedToWatched(true);
    } else {
      setAddedToWatched(false);
    }
  }, [selectedMovieID, watchedMovies]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedMovie.imdbID,
      Title: selectedMovie.Title,
      Year: selectedMovie.Year,
      Poster: selectedMovie.Poster,
      Released: selectedMovie.Released,
      Runtime: selectedMovie.Runtime,
      Genre: selectedMovie.Genre,
      imdbRating: selectedMovie.imdbRating,
      Plot: selectedMovie.Plot,
      Actors: selectedMovie.Actors,
      Director: selectedMovie.Director,
      userRating,
    };

    addWatchedMovie(newWatchedMovie);
    setAddedToWatched(true);
  }

  return (
    selectedMovie && (
      <section className={classes.details}>
        <header>
          <Button
            class__name={classes["btn-back"]}
            onClick={() => setSelectedMovie(null)}
          >
            &larr;
          </Button>
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
          {addedToWatched ? (
            <p className={classes["rating"]}>
              Movie added to watched list with rating ⭐{userRating}
            </p>
          ) : (
            <StarRating
              key={selectedMovieID}
              maxRating={10}
              size={24}
              onSetRating={setUserRating}
            />
          )}

          {userRating > 0 && !addedToWatched && (
            <Button class__name={classes["btn-add"]} onClick={handleAdd}>
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
