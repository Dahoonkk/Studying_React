import { ImSearch } from "react-icons/im";
import { MdKeyboardVoice } from "react-icons/md";
import useWindowSize from "../../../helpers/useWindowSize";
import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

const SearchBar = () => {
  const { width } = useWindowSize();
  const {setShowSpecialSearchBar} = useContext(SearchContext)

  return (
    <div className={`SearchBar ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form >
          <input type="text" name="search" placeholder="Search" autoComplete="false"/>
          <button type="submit">
            <ImSearch size={20} data-tip="Search" data-for="navbar" />
          </button>
        </form>
      ) : (
        <button className="icon-container searchIcon"
          onClick={() => setShowSpecialSearchBar(true)}
        >
          <ImSearch size={20} />
        </button>
      )}
      <button className="icon-container voiceIcon">
        <MdKeyboardVoice size={25} />
      </button>
    </div>
  );
};

export default SearchBar;
