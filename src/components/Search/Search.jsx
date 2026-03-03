import React from "react";
import classes from "./Search.module.css";

export default function Search({ value, onChange }) {
  return (
    <input
      className={classes.search}
      type="search"
      name="search__movies"
      id="search__movie"
      placeholder="Search movies..."
      value={value}
      onChange={onChange}
    />
  );
}
