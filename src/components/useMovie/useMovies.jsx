import { useEffect, useState } from "react";

const API_KEY = "a526009a";
const URL = `http://www.omdbapi.com/`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query.length < 3) return;

    async function fetchMovies() {
      try {
        const res = await fetch(`${URL}?apikey=${API_KEY}&s=${query}`);
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMovies();
  }, [query]);

  return { movies };
}
