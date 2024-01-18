/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ImSearch as SearchIcon } from "react-icons/im";
import { MdKeyboardVoice as VoiceIcon } from "react-icons/md";
import { SearchContext } from "../../../context/SearchContext";
import useWindowSize from "../../../helpers/useWindowSize";
import axios from "../../../api/axios";
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { width } = useWindowSize();

  const navigate = useNavigate();

  const { searchQuery, setSearchQuery, setShowSpecialSearchBar } =
    useContext(SearchContext);

  const handleChange = (e) => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(searchQuery.input !== '') {
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=${searchQuery.input}`)

      setSearchQuery({
        ...searchQuery,
        videos: response.data.items
      })

      navigate(`/results/${searchQuery.input}`)
    }
  }

  return (
    <div className={`SearchBar  ${width <= 640 ? "smallSearch" : ""}`}>
      {width > 640 ? (
        <form onSubmit={handleSubmit}>
          <input
            value={searchQuery.input}
            onChange={handleChange}
            type="text"
            name="search"
            placeholder="Search"
          />
          <button type="submit">
            <SearchIcon size={20} data-tip="Search" data-for="navbar" />
          </button>
        </form>
      ) : (
        <button
          className="icon-container searchIcon"
          onClick={() => setShowSpecialSearchBar(true)}
        >
          <SearchIcon size={20} data-tip="Search" data-for="navbar" />
        </button>
      )}

      <button className="icon-container voiceIcon">
        <VoiceIcon
          size={25}
          data-tip="Search with your voice"
          data-for="navbar"
        />
      </button>
    </div>
  );
};

export default SearchBar;
