import { ADD_FAVORITE, DELETE_FAVORITE_USER } from "./../types/types";

const result = {
  favorite: [],
};

function setFavoriteUsers(state = result, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case DELETE_FAVORITE_USER:
      return {
        ...state,
        favorite: deleteFavoriteUser(action.payload, state),
      };
    default:
      return state;
  }
}
export default setFavoriteUsers;

const deleteFavoriteUser = (id, state) => {
  console.log("REDUX_FAVORITE", id);
  return state.favorite.filter((userFavorite) => userFavorite.id != id);
};
