// react
import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// provider
import FavoritesProvider from "@/components/contexts/FavoritesProvider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Gif Center</title>
        <meta name="description" content="Enjoy gifs at the fullest extent." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </>
  );
}
