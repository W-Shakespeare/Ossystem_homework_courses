import React from "react";

function FavoriteList({ favorite, deleteSelectedUser }) {
  return (
    <div className="favoriteList">
      <p>FavoriteList</p>

      <div>
        {favorite.length == 0 ? (
          <p>Нет никого дома)</p>
        ) : (
          <>
            {favorite.map((userFavorite) => {
              return (
                <div key={userFavorite.id} className="card bg-light mb-3">
                  <img
                    className="card-img-top img-favorite"
                    src={userFavorite.image}
                    alt={userFavorite.name}
                  ></img>
                  <div className="card-body card-body-favorite">
                    {userFavorite.name}
                    <br></br>
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => deleteSelectedUser(userFavorite.id)}
                    >
                      Удалить
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

export default FavoriteList;
