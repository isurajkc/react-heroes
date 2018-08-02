import React from "react";
import { Link } from "react-router-dom";

const Search = ({ onSearch, value }) => (
  <input
    className="search-input"
    value={value}
    placeholder="Search for superhero..."
    type="search"
    onChange={onSearch}
  />
);

export default Search;
