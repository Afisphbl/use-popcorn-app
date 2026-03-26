import { useEffect, useState } from "react";

export const API_KEY = "a526009a";
export const URL = `http://www.omdbapi.com/`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length < 3) return;

    async function fetchMovies() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(`${URL}?apikey=${API_KEY}&s=${query}`);
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();

    return () => {
      setMovies([]);
      setError("");
    };
  }, [query]);

  return { movies, isLoading, error };
}
