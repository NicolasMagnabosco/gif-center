import { useContext } from "react";
import { CurrentGifContext } from "@/components/contexts/CurrentGifProvider";
import { CONTEXT_TYPE } from "@/types/types";
export default function GifPage() {
  const { currentGif } = useContext<CONTEXT_TYPE | null>(
    CurrentGifContext
  ) as CONTEXT_TYPE;
  return <h1>{currentGif}</h1>;
}
