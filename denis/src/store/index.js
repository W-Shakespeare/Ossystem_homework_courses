import setFavoriteUsers from "../Components/FavoriteList/redux/reducers/redusersAddResult";
import setUsersData from "../Components/PeopleList/redux/reducers/redusersAddResult";
import { createStore } from "redux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  usersData: setUsersData,
  favoriteUsers: setFavoriteUsers,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
