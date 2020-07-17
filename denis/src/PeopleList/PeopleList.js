import React, { useState, useEffect } from "react";

const urlUsers = "https://rickandmortyapi.com/api/character/?page=1";
function PeopleList() {
  const [usersData, setUsersData] = useState([]);
  const [isLoad, setLoad] = useState(true);

  const fetchData = async () => {
    let usersDataGet = await fetch(urlUsers);
    let usersDataJson = await usersDataGet.json();
    setUsersData(usersDataJson.results);
    setLoad(false);
    console.log(usersDataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="peopleList">
      <p>PeopleList</p>
      {isLoad ? (
        <p>...Load</p>
      ) : (
        <div>
          {usersData.map((userObj, key) => {
            return <p key={key}>{userObj.name}</p>;
          })}
        </div>
      )}
    </div>
  );
}
export default PeopleList;
