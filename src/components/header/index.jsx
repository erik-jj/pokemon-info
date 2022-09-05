import React from "react";

const Header = () => {
  return <>
    <div className=" flex  w-screen h-12 container-snap bg-gray-600 items-center justify-start md:justify-center">
    <img className=" ml-4 h-full py-1"src="https://archive.org/download/PokemonIcon/pokemon%20icon.png" alt="pokeicon" />
    <h1 className="ml-2 text-center text-white font-bold text-lg ">Pokédex</h1>
    </div>
  </>;
};

export default Header;
