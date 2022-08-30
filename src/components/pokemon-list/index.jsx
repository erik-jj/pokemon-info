import React, { useContext } from "react";
import PokemonCard from "../pokemon-card";
import SearchBar from "../searchbar";
import { AppContext } from "../../context/provider";
import PokemonModal from "../pokemon-modal";

const PokemonList = () => {
  const [state, setState] = useContext(AppContext);
  const { pokemonList, pokemonSeleccionado } = state;

  // const backgroundStyle = {
  //   backgroundImage: "url()",
  // };
  return (
    <>
      {pokemonSeleccionado !== undefined && <PokemonModal />}
      <div
        className=" flex w-[90vwh] justify-center mx-auto overflow-x-hidden container-snap pt-4  "
     
      >
        <div className="max-w-7xl h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4  mx-auto p-3 ">
          {pokemonList?.map((pokemon) => (
            <PokemonCard props={pokemon} key={("pokemon", pokemon.id)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
