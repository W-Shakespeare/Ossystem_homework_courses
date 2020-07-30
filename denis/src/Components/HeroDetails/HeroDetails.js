import React from "react";

function HeroDetails({ heroDetails, onAddSelectedFavorite }) {
  console.log("heroDetails", heroDetails);
  return (
    <div className="heroDetails">
      <p>HeroDetails</p>
      <div>
        {heroDetails.length == 0 ? (
          <p>Нет никого дома)</p>
        ) : (
          <>
            {heroDetails.map((userHeroDetsils) => {
              return (
                <div className="card" key={userHeroDetsils.id}>
                  <img
                    className="card-img-top"
                    src={userHeroDetsils.image}
                    alt={userHeroDetsils.name}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">
                      {`Имя ${userHeroDetsils.name}`}
                    </h5>
                    <p className="card-text">
                      {`Пол ${userHeroDetsils.gender}`}
                    </p>
                    <p> {`Раса ${userHeroDetsils.species}`}</p>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => onAddSelectedFavorite(userHeroDetsils)}
                    >
                      Добавить в избраное
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
export default HeroDetails;
