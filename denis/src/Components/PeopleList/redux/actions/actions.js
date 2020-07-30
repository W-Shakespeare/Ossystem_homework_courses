import { ADD_USERS_DATA, ADD_HERO_DETAILS } from "../types/types";

function addUsersData(arr) {
  return {
    type: ADD_USERS_DATA,
    payload: arr,
  };
}

function addHeroDetails(obj) {
  return {
    type: ADD_HERO_DETAILS,
    payload: obj,
  };
}

export { addUsersData, addHeroDetails };
