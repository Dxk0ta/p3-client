import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FavoritesButton (props) {
  const [isFavorite, setIsFavorite] = useState(false); //I MIGHT NOT NEED props.isfavorite - change to false instead
  const jwt = localStorage.getItem("jwt");
  const tmdbId = `${movie.id}`

  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        // remove from favorites
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/favorites/${movie}`, {
          headers: {
            Authorization: `${jwt}`,
          },
      if (isFavorite) {
        // remove from favorites
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/favorites/${movie}`, {
          headers: {
            Authorization: `${jwt}`,
          },
        });
        setIsFavorite(false);
      } else {
        // add to favorites
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/favorites`, movie, {
          headers: {
            Authorization: `${jwt}`,
          },
        });
        setIsFavorite(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const tmdbId = `${movie.id}`

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api-v1/users/favorites`, {
          headers: {
            Authorization: `${jwt}`,
          },
        });
        const favorites = response.data.result;
        const ids = favorites.map(favorite => favorite.id)
        setIsFavorite(ids.includes(tmdbId));
      } catch (err) {
        console.log(err);
      }
    };
  // get all objectid from users favorites
  // get all 



    checkFavorite();
  }, [jwt, tmdbId]);
  
  

  return (
    <button type="button" className="btn btn-sm font-weight-bold" onClick={toggleFavorite}>
      {isFavorite ? "Remove From Favorites" : "Add To Favorites"}
    </button>
  );
};
