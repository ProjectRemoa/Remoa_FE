import { FaMagnifyingGlass } from "react-icons/fa6";
import styledComponent from "./SearchBar.styles";
const { SearchWrapper, SearchInput, SearchIcon } = styledComponent;

function SearchBar({ placeholder, handleInput, handleClick }) {
  return (
    <SearchWrapper>
      <SearchInput
        placeholder={placeholder}
        onChange={(e) => handleInput(e.target.value)}
      />
      <SearchIcon type="button">
        <FaMagnifyingGlass onClick={handleClick} color="#a7a7a7" />
      </SearchIcon>
    </SearchWrapper>
  );
}

export default SearchBar;
