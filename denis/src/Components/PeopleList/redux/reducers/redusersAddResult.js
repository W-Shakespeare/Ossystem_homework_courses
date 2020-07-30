import { ADD_USERS_DATA, ADD_HERO_DETAILS } from "./../types/types";

const result = {
  usersData: [],
  heroDetails: [],
};

function setUsersData(state = result, action) {
  switch (action.type) {
    case ADD_USERS_DATA:
      return {
        ...state,
        usersData: action.payload,
      };
    case ADD_HERO_DETAILS:
      return {
        ...state,
        heroDetails: [action.payload],
      };
    default:
      return state;
  }
}
export default setUsersData;
