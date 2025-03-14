import { useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import s from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter text to search for images!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <header className={s.searchBar}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.searchInput}
        />
        <button type="submit" className={s.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
