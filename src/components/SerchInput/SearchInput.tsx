import React, { useContext } from "react";
import styles from "./SearchInput.module.scss";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  hidden?: string | null;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchValue,
  setSearchValue,
  className,
  hidden,
}) => {
  const { theme } = useContext(ThemeContext);
  console.log(hidden);
  return (
    <div
      className={
        hidden ? styles.hidden : `${styles.searchBox} ${styles[theme]}`
      }
    >
      <button className={`${styles.btnSearch} `}>
        <i className={`${styles.icon} `}>
          <FaSearch />
        </i>
      </button>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to Search..."
        className={`${styles.searchInput} ${className} text`}
      />
    </div>
  );
};

export default SearchInput;
