// react
import React from "react";
// types
import { GIF_OBJECT } from "@/types/types";
// style
import css from "./Gif.module.css";

export default function Gif({
  title,
  id,
  fullsize_url,
  smallsize_url,
  alt,
}: GIF_OBJECT) {
  return (
    <li className={css.gif}>
      <img src={smallsize_url} alt={alt} />
    </li>
  );
}
