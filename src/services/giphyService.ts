import { GifObject } from "@/types/types";

export default function giphyService(
  query: string
): Promise<Array<GifObject>> | null {
  const URL = "https://api.giphy.com/v1/gifs/search";
  const KEY = process.env.NEXT_PUBLIC_GIPHY_KEY;
  if (query !== "")
    return fetch(`${URL}?api_key=${KEY}&q=${query}&limit=9`)
      .then((res) => res.json())
      .then((res) =>
        res.data.map((gif: any) => {
          return {
            id: gif.id,
            title: gif.title,
            full_url: gif.images.fixed_width.url,
            preview_url: gif.images.preview_gif.url,
          };
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  else return null;
}
