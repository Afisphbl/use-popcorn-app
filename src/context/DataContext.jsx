import React, { createContext, useContext, useState } from "react";

const SelectedMovieIDContext = createContext();
const WatchedMoviesContext = createContext();

const DataContext = createContext();

const value = {
  selectedMovieID: null,
  watchedMovies: [],
};

export function DataProvider({ children }) {
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [watchedMovies, setWatchedMovies] = useState([]);

  function updateSelectedMovieID(movieID) {
    setSelectedMovieID(movieID);
  }

  function addWatchedMovie(movie) {
    setWatchedMovies((movies) => [...movies, movie]);
  }

  return (
    <DataContext.Provider
      value={{
        selectedMovieID,
        updateSelectedMovieID,
        watchedMovies,
        addWatchedMovie,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
