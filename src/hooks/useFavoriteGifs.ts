// react
import { useEffect, useState } from "react";
// types
import { GifObject } from "@/types/types";
// constants
import { FAVORITE_GIFS_KEY } from "@/constants/constants";

export default function useFavoriteGifs() {
  const [favorites, setFavorites] = useState<Array<GifObject> | null>(null);

  useEffect(() => {
    const favs = window.sessionStorage.getItem(FAVORITE_GIFS_KEY);
    if (favs) setFavorites(JSON.parse(favs));
  }, []);

  const addFavorite = (gif: GifObject) => {
    const newFavs = favorites ? [...favorites, gif] : [gif];
    window.sessionStorage.setItem(FAVORITE_GIFS_KEY, JSON.stringify(newFavs));
    setFavorites(newFavs);
  };

  const removeFavorite = (id: string) => {
    const newFavs =
      favorites && favorites.length !== 1
        ? favorites.filter((fav) => {
            return fav.id !== id;
          })
        : null;
    if (newFavs)
      window.sessionStorage.setItem(FAVORITE_GIFS_KEY, JSON.stringify(newFavs));
    else window.sessionStorage.removeItem(FAVORITE_GIFS_KEY);
    setFavorites(newFavs);
  };

  const isFavorite = (id: string) => {
    if (
      favorites &&
      favorites.find((fav) => {
        return fav.id == id;
      })
    )
      return true;
    else return false;
  };

  const clearFavorites = () => {
    window.sessionStorage.removeItem(FAVORITE_GIFS_KEY);
    setFavorites(null);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite, clearFavorites };
}
