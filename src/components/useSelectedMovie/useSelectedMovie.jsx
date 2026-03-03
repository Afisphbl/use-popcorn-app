import React, { useEffect, useState } from "react";

const API_KEY = "a526009a";
const URL = `http://www.omdbapi.com/`;

function useSelectedMovie(movieID) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!movieID) return setSelectedMovie(null);

    async function fetchMovieDetails() {
      try {
        const res = await fetch(`${URL}?apikey=${API_KEY}&i=${movieID}`);
        if (!res.ok)
          throw new Error("Something went wrong with fetching movie details");
        const data = await res.json();
        setSelectedMovie(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchMovieDetails();
  }, [movieID]);

  return { selectedMovie };
}

export default useSelectedMovie;
