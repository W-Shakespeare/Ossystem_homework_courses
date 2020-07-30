import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            PeopleList
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/FavoriteList">
            FavoriteList
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
