export interface GifObject {
  title: string;
  id: string;
  full_url: string;
}

export interface FavoritesCtxObject {
  favorites: Array<GIF_OBJECT> | null;
  addFavorite: (gif: GIF_OBJECT) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  clearFavorites: () => void;
}
