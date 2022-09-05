import { useContext, useEffect, useState } from "react";
import Header from "../components/header";
import Loading from "../components/loading";
import PokemonList from "../components/pokemon-list";

export default function Home() {
  return (
    <>
      <Header></Header>
      <PokemonList />
    </>
  );
}
