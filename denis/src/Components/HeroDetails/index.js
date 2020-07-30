import React from "react";
import { connect } from "react-redux";
import { addFavorite } from "../FavoriteList/redux/actions/actions";
import HeroDetails from "./HeroDetails";
import PropTypes from "prop-types";

HeroDetails.propTypes = {
  heroDetails: PropTypes.array,
};

function HeroDetailsContainer({ heroDetails, dispatch }) {
  const onAddSelectedFavorite = (selectedFavoriteUser) => {
    dispatch(addFavorite(selectedFavoriteUser));
  };
  return (
    <HeroDetails
      heroDetails={heroDetails}
      onAddSelectedFavorite={onAddSelectedFavorite}
    />
  );
}

export default connect(null, null)(HeroDetailsContainer);
