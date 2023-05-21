"use client";
import { createContext } from "react";
import { GIF_OBJECT, CONTEXT_TYPE } from "@/types/types";
import { ReactNode } from "react";
import { useState } from "react";

export const CurrentGifContext = createContext<CONTEXT_TYPE | null>(null);

export default function CurrentGifProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [currentGif, setCurrentGif] = useState<string | null>(null);
  const updateCurrentGif = (id: string) => {
    setCurrentGif(id);
  };
  return (
    <CurrentGifContext.Provider value={{ currentGif, updateCurrentGif }}>
      {children}
    </CurrentGifContext.Provider>
  );
}
