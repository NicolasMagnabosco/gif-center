// react
import React from "react";
// types
import { GIF_OBJECT } from "@/types/types";
// style
import css from "./List.module.css";
// components
import Gif from "./gif/Gif";

interface PROPS {
  gifs: Array<GIF_OBJECT>;
}

export default function List({ gifs }: PROPS) {
  return (
    <ul className={css.list}>
      {gifs.map((gif) => {
        return <Gif {...gif} />;
      })}
    </ul>
  );
}
