// react
import React from "react";
import { useContext, useEffect, useState } from "react";
// context
import { CurrentGifContext } from "@/components/contexts/CurrentGifProvider";
// next router
import Link from "next/link";
// types
import { CONTEXT_TYPE, GIF_OBJECT } from "@/types/types";
// services
import giphyService from "@/services/giphyService";
// style
import css from "./HomePage.module.css";
// components
import Search from "@/components/homePage/search/Search";
import List from "@/components/homePage/list/List";

export default function HomePage() {
  const { updateCurrentGif } = useContext<CONTEXT_TYPE | null>(
    CurrentGifContext
  ) as CONTEXT_TYPE;

  const [gifs, setGifs] = useState<Array<GIF_OBJECT> | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = () => {
    const fetchGifs = async () => {
      setIsLoading(true);
      const fetched = await giphyService(inputValue);
      if (fetched) setGifs(fetched);
      setIsLoading(false);
    };

    fetchGifs();
  };

  const updateInputValue = (value: string) => {
    setInputValue(value);
  };

  console.log(gifs);
  return (
    <div className={css.home}>
      <header className={css.header}>
        <h1>THE GIF CENTER</h1>
        <Search
          updateInputValue={updateInputValue}
          handleSearch={handleSearch}
        />
      </header>
      <main className={css.main}>
        {gifs && !isLoading && <List gifs={gifs} />}

        {isLoading && (
          <div className="loading-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </main>
    </div>
  );
}
