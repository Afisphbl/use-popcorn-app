import React from "react";
import classes from "./Summary.module.css";

function Summary() {
  return (
    <section className={classes.summary}>
      <h2>movies you watched</h2>

      <div>
        <p>
          #️⃣ <span>0 movies</span>
        </p>
        <span>⭐️ 0</span>
        <span>🌟 0</span>
        <span>⏳ 0 min</span>
      </div>
    </section>
  );
}

export default Summary;
