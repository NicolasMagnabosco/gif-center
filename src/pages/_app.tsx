// react
import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// provider
import FavoritesProvider from "@/components/contexts/FavoritesProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}
