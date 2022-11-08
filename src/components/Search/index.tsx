import React from 'react';
import { FaSistrix } from 'react-icons/fa';

function Search() {
  return (
    <form className="search-box" action="">
      <input
        className="search-box__input"
        type="text"
        placeholder="Search hear..."
      />
      <button className="search-box__btn" type="button">
        <FaSistrix className="FaSistrix" />
      </button>
    </form>
  );
}

export default Search;
