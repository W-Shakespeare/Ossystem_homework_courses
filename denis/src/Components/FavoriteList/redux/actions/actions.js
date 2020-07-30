import { ADD_FAVORITE, DELETE_FAVORITE_USER } from "../types/types";

function addFavorite(obj) {
  return {
    type: ADD_FAVORITE,
    payload: obj,
  };
}

function deleteFavoriteUser(id) {
  return {
    type: DELETE_FAVORITE_USER,
    payload: id,
  };
}

export { addFavorite, deleteFavoriteUser };
