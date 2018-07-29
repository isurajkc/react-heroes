import React from "react";
import { Link } from "react-router-dom";

const HeroList = ({ heroes, deleteItem }) => (
  <div>
    <ul className="heroes">
      {heroes.map((hero, index) => (
        <li key={index}>
          <Link to={`/heroes/${hero.id}`}>
            <span>{hero.id}</span>
            <span>{hero.name}</span>
          </Link>
          <button className="delete" onClick={() => deleteItem(hero.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default HeroList;
