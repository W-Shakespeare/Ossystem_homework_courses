import React, { useState, useEffect } from "react";
import "./style.css";
import { addUsersData, addHeroDetails } from "./redux/actions/actions";
import { connect } from "react-redux";
import PeopleList from "./PeopleList";
const urlUsers = "https://rickandmortyapi.com/api/character/?page=1";

function PeopleListContainer({ dispatch }) {
  const [usersData, setUsersData] = useState([]);
  const [isLoad, setLoad] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let usersDataGet = await fetch(urlUsers);
    let usersDataJson = await usersDataGet.json();
    setUsersData(usersDataJson.results);
    setLoad(false);
    console.log(usersDataJson);
    dispatch(addUsersData(usersDataJson.results));
  };

  const onAddHeroDetails = (userObj) => {
    dispatch(addHeroDetails(userObj));
  };

  return (
    <PeopleList
      usersData={usersData}
      onAddHeroDetails={onAddHeroDetails}
      isLoad={isLoad}
    />
  );
}

export default connect(null, null)(PeopleListContainer);
