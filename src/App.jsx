import React, { useState } from "react";
import { Minus } from "lucide-react";
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import MovieList from "./components/Movie__list/MovieList";
import Summary from "./components/Summary/Summary";

function App() {
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
          <Button class__name="btn-toggle">{<Minus size={16} />}</Button>
          <MovieList />
        </section>
        <section className="box">
          <Button class__name="btn-toggle">{<Minus size={16} />}</Button>

          <div className="list-watched">
            <Summary />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
