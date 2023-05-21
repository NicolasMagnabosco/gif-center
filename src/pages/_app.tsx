import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CurrentGifProvider from "@/components/contexts/CurrentGifProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentGifProvider>
      <Component {...pageProps} />
    </CurrentGifProvider>
  );
}
