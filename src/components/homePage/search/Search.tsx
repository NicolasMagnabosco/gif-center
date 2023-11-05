// react
import React from "react";
// style
import css from "./Search.module.css";

interface Props {
  handleSearch: () => void;
  updateInputValue: (value: string) => void;
}

export default function Search({ handleSearch, updateInputValue }: Props) {
  return (
    <div className={css.container}>
      <input
        onChange={(ev) => updateInputValue(ev.target.value)}
        className={css.input}
        type="text"
      />
      <button onClick={handleSearch} className={`button ${css["search-btn"]}`}>
        Search
      </button>
    </div>
  );
}
