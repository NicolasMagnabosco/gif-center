// react
import React from "react";
// style
import css from "./Search.module.css";

interface PROPS {
  handleSearch: () => void;
  updateInputValue: (value: string) => void;
}

export default function Search({ handleSearch, updateInputValue }: PROPS) {
  return (
    <div className={css.container}>
      <input
        onChange={(ev) => updateInputValue(ev.target.value)}
        className={css.input}
        type="text"
      />
      <button onClick={handleSearch} className="button">
        Search
      </button>
    </div>
  );
}
