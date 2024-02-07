import React from "react";

interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchValue, setSearchValue }) => {
  
  return (
    <input
      type="text" 
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
      autoFocus
    />
  );
};

export default SearchInput;
