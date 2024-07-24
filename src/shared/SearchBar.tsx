import React, { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing a search icon from react-icons

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center bg-primary-300 text-primary-100 rounded-full shadow-md p-2 w-[400px]">
      <FaSearch className="ml-2 mr-2" /> {/* Search icon with some margin */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="w-full bg-transparent focus:outline-none text-primary-100 placeholder-primary-100"
      />
    </div>
  );
};

export default SearchBar;
