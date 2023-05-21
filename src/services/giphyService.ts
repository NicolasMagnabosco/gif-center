import { GIF_OBJECT } from "@/types/types";

export default function giphyService(
  query: string
): Promise<Array<GIF_OBJECT>> | null {
  const URL = "https://api.giphy.com/v1/gifs/search";
  const KEY = "VL3P7JQWmJg1CnrVKqqpDHWjGdgueRYH";
  if (query !== "")
    return fetch(`${URL}?api_key=${KEY}&q=${query}&limit=6`)
      .then((res) => res.json())
      .then((res) =>
        res.data.map((gif: any) => {
          return {
            id: gif.id,
            title: gif.title,
            alt: gif.alt,
            smallsize_url: gif.images.fixed_width.url,
            fullsize_url: gif.images.original,
          };
        })
      )
      .catch((err) => {
        throw new Error(err);
      });
  else return null;
}
