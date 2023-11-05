// react
import React from "react";
// types
import { GifObject } from "@/types/types";
// constants
import { CURRENT_GIF_KEY } from "@/constants/constants";
// style
import css from "./GifName.module.css";
// router
import { useRouter } from "next/router";

interface PROPS {
  gif: GifObject;
}

export default function GifName({ gif }: PROPS) {
  const router = useRouter();

  const handleNavigation = () => {
    window.sessionStorage.setItem(CURRENT_GIF_KEY, JSON.stringify(gif));
    router.push({ pathname: "/gif", query: { id: gif.id } });
  };

  return (
    <li onClick={handleNavigation} className={css.item}>
      <p className={css.title}>{gif.title}</p>
    </li>
  );
}
