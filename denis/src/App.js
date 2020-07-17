import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PeopleList from "./PeopleList/PeopleList.js";
import HeroDetails from "./HeroDetails/HeroDetails";
import FavoriteList from "./FavoriteList/FavoriteList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">PeopleList</Link>
          <br></br>
          <Link to="/HeroDetails">HeroDetails</Link>
          <br></br>
          <Link to="/FavoriteList">FavoriteList</Link>
        </div>
        <Route exact path="/">
          <PeopleList />
        </Route>
        <Route exact path="/HeroDetails">
          <HeroDetails />
        </Route>
        <Route exact path="/FavoriteList">
          <FavoriteList />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
