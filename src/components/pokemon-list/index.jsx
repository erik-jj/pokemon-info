import React, { useContext } from "react";
import PokemonCard from "../pokemon-card";
import SearchBar from "../searchbar";
import { AppContext } from "../../context/provider";

const PokemonList = () => {
  const [state, setState] = useContext(AppContext);
  const { pokemonList } = state;
  console.log(pokemonList);
  return (
    <>
      <div className=" flex w-[90vwh] justify-center mx-auto overflow-x-hidden container-snap my-4">
        <div className="max-w-7xl h-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4  mx-auto ">
          {pokemonList?.map((pokemon) => (
            <PokemonCard props={pokemon} key={("pokemon", pokemon.id)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonList;
