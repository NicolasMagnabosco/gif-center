// react
import React, { FormEvent } from "react";
// style
import css from "./Search.module.css";

interface Props {
  handleSubmit: (ev: FormEvent<HTMLFormElement>) => void;
  updateInputValue: (value: string) => void;
}

export default function Search({ handleSubmit, updateInputValue }: Props) {
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} action="#">
        <input
          onChange={(ev) => updateInputValue(ev.target.value)}
          className={css.input}
          type="text"
        />
        <button type="submit" className={`button ${css["search-btn"]}`}>
          Search
        </button>
      </form>
    </div>
  );
}
