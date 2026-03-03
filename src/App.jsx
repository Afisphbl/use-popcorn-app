import React from "react";
import { SelectedMovieIDProvider } from "./context/DataContext";
import { useMovies } from "./components/useMovie/useMovies";
import { Minus } from "lucide-react";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import MovieList from "./components/Movie__list/MovieList";
import Summary from "./components/Summary/Summary";
import Details from "./components/Details/Details";

function App() {
  const { movies } = useMovies("interstellar");
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
        <SelectedMovieIDProvider>
          <section className="box">
            <Button class__name="btn-toggle">{<Minus size={16} />}</Button>
            <MovieList movies={movies} />
          </section>
          <section className="box">
            <Button class__name="btn-toggle">{<Minus size={16} />}</Button>

            <div className="list-watched">
              <Summary />
              <Details />
            </div>
          </section>
        </SelectedMovieIDProvider>
      </main>
    </>
  );
}

export default App;
