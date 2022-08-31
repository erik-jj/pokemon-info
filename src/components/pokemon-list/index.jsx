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

  return (
    <>
      {pokemonSeleccionado !== undefined && <PokemonModal />}

      <div className=" flex w-[90vw] justify-center mx-auto overflow-x-hidden pt-4 flex-col  ">
        <SearchBar />
        <NoMatch />
        <div className="max-w-7xl h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-4  mx-auto bg-white z-10  ">
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
