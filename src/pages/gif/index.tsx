// react
import React, { useEffect, useState, useContext } from "react";
// router
import { useRouter } from "next/router";
// types
import { FavoritesCtxObject, GifObject } from "@/types/types";
// components
import ArrowSVG from "@/components/common/svg/ArrowSVG";
import FavoriteBtn from "@/components/common/favoriteBtn/FavoriteBtn";
// context
import { FavoritesCtx } from "@/components/contexts/FavoritesProvider";
// style
import css from "./GifPage.module.css";

export default function GifPage() {
  const { favorites, isFavorite, removeFavorite, addFavorite } = useContext(
    FavoritesCtx
  ) as FavoritesCtxObject;
  const [idQuery, SetIdQuery] = useState<string | null>(null);
  const [gif, setGif] = useState<GifObject | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id && typeof router.query.id === "string")
      SetIdQuery(router.query.id);
  }, [router.isReady]);

  useEffect(() => {
    const gif = favorites?.find((g) => {
      return g.id === idQuery;
    });
    if (gif) setGif(gif);
  }, [idQuery]);

  const handleFavorite = () => {
    if (gif)
      if (isFavorite(gif.id)) removeFavorite(gif.id);
      else addFavorite(gif);
  };

  return (
    <div className={css["gif-page"]}>
      <header className={css.header}>
        <button
          onClick={() => router.push("/")}
          className={`button ${css["home-btn"]}`}
        >
          <ArrowSVG stroke="white" width={30} height={30} />
          <p>Home</p>
        </button>
      </header>
      <main className={css.main}>
        {gif && (
          <div className={css["gif-container"]}>
            <img className={css.gif} src={gif.full_url} alt="gif" />
            <p className={css.title}>{gif.title}</p>
            <p className={css.id}>id: {gif.id}</p>
            <FavoriteBtn
              isFav={isFavorite(gif.id)}
              handleFavorite={handleFavorite}
            />
          </div>
        )}
      </main>
    </div>
  );
}
