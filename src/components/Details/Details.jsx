import React, { useEffect } from "react";
import useSelectedMovie from "../useSelectedMovie/useSelectedMovie";
import { useSelectedMovieID } from "../../context/DataContext";
import classes from "./Details.module.css";

function Details() {
  const { selectedMovieID } = useSelectedMovieID();
  const { selectedMovie } = useSelectedMovie(selectedMovieID);
  console.log(selectedMovie);
  return selectedMovie ? (
    <p>{selectedMovie.title}</p>
  ) : (
    <p>No movie selected</p>
  );
}

export default Details;
