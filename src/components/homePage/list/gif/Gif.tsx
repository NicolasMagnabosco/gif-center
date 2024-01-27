// react
import React, { useContext } from "react";
// types
import { FavoritesCtxObject, GifObject } from "@/types/types";

// style
import css from "./Gif.module.css";
// context
import { FavoritesCtx } from "@/components/contexts/FavoritesProvider";
// components
import FavoriteBtn from "@/components/common/favoriteBtn/FavoriteBtn";
// router
import { useRouter } from "next/router";

export default function Gif({ gif }: { gif: GifObject }) {
  const router = useRouter();

  const { addFavorite, removeFavorite, isFavorite } = useContext(
    FavoritesCtx
  ) as FavoritesCtxObject;

  const handleFavorite = (isFav: boolean) => {
    if (isFav) removeFavorite(gif.id);
    else addFavorite(gif);
  };

  return (
    <li className={css.item}>
      <div className={css["gif-container"]}>
        <img className={css.gif} src={gif.full_url} alt="gif" />
        <p className={css.title}>{gif.title}</p>
        <FavoriteBtn
          isFav={isFavorite(gif.id)}
          handleFavorite={handleFavorite}
        />
      </div>
    </li>
  );
}
