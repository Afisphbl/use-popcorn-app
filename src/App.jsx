import React, { useState } from "react";
import { DataProvider, useDataContext } from "./context/DataContext";
import { useMovies } from "./components/useMovie/useMovies";
import { Minus, Plus, Loader } from "lucide-react";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import MovieList from "./components/Movie__list/MovieList";
import Summary from "./components/Summary/Summary";
import Details from "./components/Details/Details";
import WatchedMovies from "./components/WatchedMovies/WatchedMovies";

function App() {
  const { movies, isLoading } = useMovies("interstellar");
  const [showMovieList, setShowMovieList] = useState(true);
  const [showDetails, setShowDetails] = useState(true);
  const { selectedMovieID, watchedMovies } = useDataContext();

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span>🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <Search />

        <p className="num-results">Found 10 resut</p>
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
          {showMovieList && !isLoading && <MovieList movies={movies} />}
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
