import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route } from "react-router-dom";
import { PeopleList, HeroDetails, FavoriteList } from "./Components";
import { connect } from "react-redux";
import Nav from "./Nav";

App.propTypes = {
  state: PropTypes.shape({
    favoriteUsers: PropTypes.shape({ favorite: PropTypes.array }),
    usersData: PropTypes.shape({
      heroDetails: PropTypes.array,
      usersData: PropTypes.array,
    }),
  }),
};

function App({ state }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/">
          <PeopleList />
        </Route>
        <Route exact path="/HeroDetails">
          <HeroDetails heroDetails={state.usersData.heroDetails} />
        </Route>
        <Route exact path="/FavoriteList">
          <FavoriteList favorite={state.favoriteUsers.favorite} />
        </Route>
      </BrowserRouter>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, null)(App);
