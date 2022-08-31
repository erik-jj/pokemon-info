import React, { useContext, useEffect, useState } from "react";
import PokemonCard from "../pokemon-card";
import SearchBar from "../searchbar";
import { AppContext } from "../../context/provider";
import PokemonModal from "../pokemon-modal";
import NoMatch from "../no-match";

const PokemonList = () => {
  const [state] = useContext(AppContext);
  const { pokemonList, pokemonSeleccionado, busqueda } = state;
  const noMatching = false;
  const [load, setLoad] = useState(true);
  return (
    <>
      {pokemonSeleccionado !== undefined && <PokemonModal />}

      <div className=" flex w-full justify-center mx-auto overflow-x-hidden pt-4 flex-col px-2  ">
        <SearchBar />
        {pokemonList?.length > 0 && busqueda.length > 0 && <NoMatch />}
        <div className="max-w-7xl w-full h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-3  mx-auto bg-white z-10  ">
          {pokemonList?.map((pokemon) => {
            if (pokemon.name.toLowerCase().includes(busqueda?.toLowerCase())) {
              return (
                <PokemonCard props={pokemon} key={("pokemon", pokemon.id)} />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
