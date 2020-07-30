import React from "react";
import { connect } from "react-redux";
import { deleteFavoriteUser } from "./redux/actions/actions";
import FavoriteList from "./FavoriteList";
import PropTypes from "prop-types";

FavoriteListContainer.propTypes = {
  favorite: PropTypes.array,
};

function FavoriteListContainer({ favorite, dispatch }) {
  const deleteSelectedUser = (id) => {
    dispatch(deleteFavoriteUser(id));
  };
  return (
    <FavoriteList favorite={favorite} deleteSelectedUser={deleteSelectedUser} />
  );
}

export default connect(null, null)(FavoriteListContainer);
