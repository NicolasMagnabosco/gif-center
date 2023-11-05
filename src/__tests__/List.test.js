import { render } from "@testing-library/react";
import List from "../components/homePage/list/List";
import FavoritesProvider from "../components/contexts/FavoritesProvider";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const gif = {
  title: "gif",
  id: "123",
  full_url: "url",
};

test("renders the fetched gif", () => {
  const comp = render(
    <FavoritesProvider>
      <List gifs={[gif]} />
    </FavoritesProvider>
  );
  const element = comp.getByText("gif");
  expect(element.textContent).toBe(gif.title);
});
