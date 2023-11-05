import Favorites from "../components/homePage/favorites/Favorites";
import FavoritesProvider from "../components/contexts/FavoritesProvider";
import { render } from "@testing-library/react";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockUseFavoriteGifs = {
  favorites: null,
  addFavorite: jest.fn(),
  removeFavorite: jest.fn(),
  isFavorite: jest.fn(),
  clearFavorites: jest.fn(),
};

jest.mock("../hooks/useFavoriteGifs", () => ({
  __esModule: true,
  default: jest.fn(() => mockUseFavoriteGifs),
}));

describe("tests", () => {
  test("default favorites is empty", () => {
    const { getByText } = render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>
    );

    expect(getByText("Oops, it's empty")).toBeTruthy();
  });

  test("favorites render correctly", () => {
    const mockFavorites = [
      { title: "title", id: "1", full_url: "url" },
      { title: "title2", id: "2", full_url: "url" },
    ];

    mockUseFavoriteGifs.favorites = mockFavorites;
    const { getByText } = render(
      <FavoritesProvider>
        <Favorites />
      </FavoritesProvider>
    );
    expect(getByText("title2").textContent).toBe("title2");
  });
});
