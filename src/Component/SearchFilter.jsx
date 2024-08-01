import React from "react";
import "./Books.css";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const Search = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search Author"
        value={searchQuery}
        onChange={Search}
      />
    </div>
  );
};

export default SearchFilter;
