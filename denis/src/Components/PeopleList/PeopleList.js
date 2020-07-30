import React from "react";
import { Link } from "react-router-dom";

function PeopleList({ usersData, isLoad, onAddHeroDetails }) {
  return (
    <div className="peopleList">
      <p>PeopleList</p>
      {isLoad ? (
        <p>...Load</p>
      ) : (
        <div className="peopleList-userCard">
          {usersData.map((userObj) => {
            return (
              <div key={userObj.id} className="card bg-light mb-3">
                <div className="card-body">
                  {userObj.name}
                  <br></br>

                  <Link className="nav-link" to="/HeroDetails">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onAddHeroDetails(userObj)}
                    >
                      Подробнее
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default PeopleList;
