import useFavoriteGifs from "@/hooks/useFavoriteGifs";
import { FavoritesCtxObject } from "@/types/types";
import { createContext } from "react";
import { ReactNode } from "react";

export const FavoritesCtx = createContext<FavoritesCtxObject | null>(null);

export default function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { favorites, addFavorite, removeFavorite, isFavorite, clearFavorites } =
    useFavoriteGifs();

  return (
    <FavoritesCtx.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesCtx.Provider>
  );
}
