// react
import React, { useContext, useState } from "react";
// style
import css from "./Favorites.module.css";
// components
import GifName from "./gifName/GifName";
import Empty from "./empty/Empty";
// types
import { FavoritesCtxObject, GifObject } from "@/types/types";
// context
import { FavoritesCtx } from "@/components/contexts/FavoritesProvider";

export default function Favorites() {
  const { favorites, clearFavorites } = useContext(
    FavoritesCtx
  ) as FavoritesCtxObject;
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  return (
    <div className={css.container}>
      <button
        onClick={() => setIsDisplayed(!isDisplayed)}
        className={`${css["menu-btn"]} ${isDisplayed && css.active}`}
      >
        {!isDisplayed ? (
          <>
            <div className={css["menu-btn-bar"]}></div>
            <div className={css["menu-btn-bar"]}></div>
            <div className={css["menu-btn-bar"]}></div>
          </>
        ) : (
          <>
            <div className={css["menu-btn-cross"]}></div>
            <div className={css["menu-btn-cross"]}></div>
          </>
        )}
      </button>
      <div
        className={`${css["favorites-container"]} ${isDisplayed && css.active}`}
      >
        <aside className={css.aside}>
          <div className={css["aside-container"]}>
            <div className={css["aside-content"]}>
              <h2 className={css.title}>FAVORITE GIFS</h2>
              <button
                onClick={clearFavorites}
                className={`button ${css["clear-btn"]}`}
              >
                Clear
              </button>
            </div>
            <ul className={css.list}>
              {favorites ? (
                favorites.map((gif) => {
                  return <GifName key={gif.id} gif={gif} />;
                })
              ) : (
                <Empty />
              )}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
