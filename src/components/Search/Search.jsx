import React, { forwardRef } from "react";
import classes from "./Search.module.css";

export default forwardRef(function Search({ value, onChange }, ref) {
  return (
    <input
      ref={ref}
      className={classes.search}
      type="search"
      name="search__movies"
      id="search__movie"
      placeholder="Search movies..."
      value={value}
      onChange={onChange}
    />
  );
});
