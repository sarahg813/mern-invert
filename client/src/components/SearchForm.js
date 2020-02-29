import React, { useState } from "react";

const SearchForm = props => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunc = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      <input value={searchValue} onChange={handleSearchChanges} type="text" />
      <input onClick={callSearchFunc} type="submit" value="search" />
    </form>
  );
};

export default SearchForm;
