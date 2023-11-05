// react
import React from "react";
// types
import { GifObject } from "@/types/types";
// style
import css from "./List.module.css";
// components
import Gif from "./gif/Gif";

interface PROPS {
  gifs: Array<GifObject>;
}

export default function List({ gifs }: PROPS) {
  return (
    <ul className={css.list}>
      {gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif} />;
      })}
    </ul>
  );
}
