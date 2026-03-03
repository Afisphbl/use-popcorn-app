import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState(function () {
    const storedWatchedMovies = localStorage.getItem("watchedMovies");

    if (storedWatchedMovies) {
      return JSON.parse(storedWatchedMovies);
    }

    return [];
  });

  function updateSelectedMovieID(movieID) {
    setSelectedMovieID(movieID);
  }

  function clearSelectedMovie() {
    setSelectedMovieID(null);
  }

  function addWatchedMovie(movie) {
    setWatchedMovies((movies) => [...movies, movie]);
    localStorage.setItem(
      "watchedMovies",
      JSON.stringify([...watchedMovies, movie]),
    );
    setSelectedMovieID(null);
  }

  return (
    <DataContext.Provider
      value={{
        selectedMovieID,
        updateSelectedMovieID,
        watchedMovies,
        addWatchedMovie,
        clearSelectedMovie,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
