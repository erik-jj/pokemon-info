import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import PokemonList from "../components/pokemon-list";
import { AppContext } from "../context/provider";
import endPoints from "../services/api/index";

export default function Home() {
  const [state, setState] = useContext(AppContext);

  const obtenerDatos = async () => {
    let dataArray = [];
    for (let i = 1; i <= 151; i++) {
      const response = await axios.get(endPoints.pokemon.getPokemon(i));
      dataArray.push(response.data);
    }
    setState({ ...state, busqueda: "", pokemonList: dataArray });
  };

  useEffect(() => {
    document.title = "PokeDex";
    obtenerDatos();
  }, []);

  return (
    <>
      <PokemonList />
    </>
  );
}
