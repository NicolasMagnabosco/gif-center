// react
import React from "react";
// style
import css from "./Empty.module.css";
// components
import EmptyFavoriteSVG from "@/components/common/svg/EmptyFavoriteSVG";

export default function Empty() {
  return (
    <div className={css.container}>
      <EmptyFavoriteSVG stroke="white" width={40} height={40} />
      <p>Oops, it's empty</p>
    </div>
  );
}
