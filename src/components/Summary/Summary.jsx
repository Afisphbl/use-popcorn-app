import React from "react";
import { useDataContext } from "../../context/DataContext";
import classes from "./Summary.module.css";

function Summary() {
  const { watchedMovies } = useDataContext();

  const averageRating =
    watchedMovies.reduce((acc, cur) => acc + cur.userRating, 0) /
    watchedMovies.length;
  const averageImdbRating =
    watchedMovies.reduce((acc, cur) => acc + Number(cur.imdbRating), 0) /
    watchedMovies.length;
  const totalRuntime = watchedMovies.reduce(
    (acc, cur) => acc + Number(cur.Runtime.split(" ")[0]),
    0,
  );

  return (
    <section className={classes.summary}>
      <h2>movies you watched</h2>

      <div>
        <p>
          #️⃣ <span>{watchedMovies.length} movies</span>
        </p>
        <span>⭐️ {averageRating.toFixed(2)}</span>
        <span>🌟 {averageImdbRating.toFixed(2)}</span>
        <span>⏳ {totalRuntime} min</span>
      </div>
    </section>
  );
}

export default Summary;
