import React, { createContext, useContext, useState } from "react";

const SelectedMovieIDContext = createContext();

export function SelectedMovieIDProvider({ children }) {
  const [selectedMovieID, setSelectedMovieID] = useState(null);

  function updateSelectedMovieID(movieID) {
    setSelectedMovieID(movieID);
  }

  return (
    <SelectedMovieIDContext.Provider
      value={{ selectedMovieID, updateSelectedMovieID }}
    >
      {children}
    </SelectedMovieIDContext.Provider>
  );
}

export function useSelectedMovieID() {
  return useContext(SelectedMovieIDContext);
}
