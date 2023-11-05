// react
import React from "react";
// components
import FavoriteSVG from "../svg/FavoriteSVG";
import RemoveFavoriteSVG from "../svg/RemoveFavoriteSVG";
// style
import css from "./FavoriteBtn.module.css";

interface PROPS {
  isFav: boolean;
  handleFavorite: () => void;
}

export default function FavoriteBtn({ isFav, handleFavorite }: PROPS) {
  return (
    <button
      onClick={handleFavorite}
      className={`button ${css["favorite-btn"]} ${isFav && css.remove}`}
    >
      {isFav ? (
        <RemoveFavoriteSVG fill="white" width={40} height={40} />
      ) : (
        <FavoriteSVG fill="white" width={40} height={40} />
      )}
    </button>
  );
}
