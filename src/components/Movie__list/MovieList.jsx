import React from "react";
import classes from "./MovieList.module.css";

function MovieList() {
  return (
    <ul className={`${classes.list} ${classes["list-movies"]}`}>
      <li>
        <img src="./usepopcornLogo.png" alt="logo" />
        <h3>usePopcorn</h3>
        <div>
          <p>Rate</p>
        </div>
      </li>
      <li>
        <img src="./usepopcornLogo.png" alt="logo" />
        <h3>usePopcorn</h3>
        <div>
          <p>Rate</p>
        </div>
      </li>
      <li>
        <img src="./usepopcornLogo.png" alt="logo" />
        <h3>usePopcorn</h3>
        <div>
          <p>Rate</p>
        </div>
      </li>
      <li>
        <img src="./usepopcornLogo.png" alt="logo" />
        <h3>usePopcorn</h3>
        <div>
          <p>Rate</p>
        </div>
      </li>
      <li>
        <img src="./usepopcornLogo.png" alt="logo" />
        <h3>usePopcorn</h3>
        <div>
          <p>Rate</p>
        </div>
      </li>
    </ul>
  );
}

export default MovieList;
