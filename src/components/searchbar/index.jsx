import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/provider";

const SearchBar = () => {
  const [state, setState] = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleSearch = (typed) => {
    window.event.preventDefault();
    setSearch(typed);
  };

  useEffect(() => {
    setState({ ...state, busqueda: search });
  }, [search]);

  return (
    <>
      <div className="w-3/5 md:w-1/5 h-8  mx-auto my-2 flex flex-row-reverse overflow-hidden items-center  bg-gray-200 rounded-md border-2 border-gray-700">
      <input
          className="w-full h-full focus:outline-none p-2 "
          type="search"
          maxLength="15"
          onInput={(e) => handleSearch(e.target.value)}
          placeholder="Search Pokémon"
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.7}
          stroke="currentColor"
          className="w-7 h-7 stroke-white bg-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        
      </div>
    </>
  );
};

export default SearchBar;
