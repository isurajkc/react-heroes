import React from "react";
import { Link } from "react-router-dom";

const HeroSearch = ({ search, searchResults }) => {
  console.log(searchResults);
  return (
    <div className="search-component">
      <h4>Hero Search</h4>

      <input id="search-box" type="search" onChange={e => search(e)} />
      {searchResults.length > 0 && (
        <ul className="search-result">
          {searchResults.map((val, index) => (
            <Link to={`/heroes/${val.id}`}>
              {" "}
              <li>{val.name}</li>{" "}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroSearch;
