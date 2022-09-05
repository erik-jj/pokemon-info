import React, { useContext, useEffect, useState, Suspense, lazy } from "react";
import PokemonCard from "../pokemon-card";
import SearchBar from "../searchbar";
import { AppContext } from "../../context/provider";
import PokemonModal from "../pokemon-modal";
import NoMatch from "../no-match";
import Loading from "../loading";
import axios from "axios";
import endPoints from "../../services/api";

const PokemonList = () => {
  const [state, setState] = useContext(AppContext);
  const { pokemonSeleccionado, busqueda } = state;
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "PokeDex";
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    let dataArray = [];
    setLoading(true);
    for (let i = 1; i <= 20; i++) {
      const response = await axios.get(endPoints.pokemon.getPokemon(i));
      dataArray.push(response.data);
    }
    setPokemonList(dataArray);
    setLoading(false);
  };

  return (
    <>
      {pokemonSeleccionado !== undefined && <PokemonModal />}

      <div className=" flex w-full justify-center mx-auto overflow-x-hidden pt-4 flex-col px-2   ">
        <SearchBar />
        {pokemonList?.length > 0 && busqueda.length > 0 && <NoMatch />}

        {loading ? (
          <Loading />
        ) : (
          <div className="max-w-7xl w-full h-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 mx-auto bg-white z-10  ">
            {pokemonList?.map((pokemon) => {
              if (
                pokemon.name.toLowerCase().includes(busqueda?.toLowerCase())
              ) {
                return (
                  <PokemonCard props={pokemon} key={("pokemon", pokemon.id)} />
                );
              } else {
                return null;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PokemonList;
