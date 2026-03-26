import React, { useState, useRef, useEffect } from "react";
import { DataProvider, useDataContext } from "./context/DataContext";
import { useMovies } from "./components/useMovie/useMovies";
import { Minus, Plus, Loader, TriangleAlert } from "lucide-react";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import MovieList from "./components/Movie__list/MovieList";
import Summary from "./components/Summary/Summary";
import Details from "./components/Details/Details";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";
import useDebounce from "./components/Debounce/Debounce";

function App() {
  const [showMovieList, setShowMovieList] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  const { selectedMovieID, watchedMovies } = useDataContext();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { movies, isLoading, error } = useMovies(debouncedQuery);
  const searchInputRef = useRef();

  useEffect(() => {
    function handleFocus(e) {
      if (e.code === "Enter") {
        if (searchInputRef.current === document.activeElement) return;
        searchInputRef.current.focus();
      }
    }

    document.addEventListener("keydown", handleFocus);

    return () => {
      document.removeEventListener("keydown", handleFocus);
    };
  });

  function handleSearch(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span>🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search ref={searchInputRef} value={query} setQuery={setQuery} />

        <p className="num-results">Found {movies.length} results</p>
      </nav>

      <main className="main">
        <section className="box">
          <Button
            class__name="btn-toggle"
            onClick={() => setShowMovieList((show) => !show)}
          >
            {showMovieList ? <Minus size={16} /> : <Plus size={16} />}
          </Button>
          {isLoading && (
            <p className="loader">
              <Loader className="animate-spin" size={24} />
            </p>
          )}
          {error && (
            <p className="error">
              <TriangleAlert size={32} />
              {error}
            </p>
          )}
          {showMovieList && !isLoading && !error && (
            <MovieList movies={movies} />
          )}
        </section>

        <section className="box">
          <Button
            class__name="btn-toggle"
            onClick={() => setShowDetails((show) => !show)}
          >
            {showDetails ? <Minus size={16} /> : <Plus size={16} />}
          </Button>

          {showDetails && (
            <div className="list-watched">
              <Summary />
              {selectedMovieID ? (
                <Details />
              ) : (
                <WatchedMovies watchedMovies={watchedMovies} />
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
