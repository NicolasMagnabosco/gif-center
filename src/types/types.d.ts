export interface GIF_OBJECT {
  title: string;
  id: string;
  fullsize_url: string;
  smallsize_url: string;
  alt: string;
}

export interface CONTEXT_TYPE {
  currentGif: string | null;
  updateCurrentGif: (id: string) => void;
}
