import React, { useContext, useRef } from "react";
import { AppContext } from "../../context/provider";
import PokemonDetail from "../pokemon-detail";

const PokemonModal = () => {
  const [state, setState] = useContext(AppContext);
  const { pokemonSeleccionado } = state;
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <div
        onClick={() => setState({ ...state, pokemonSeleccionado: undefined })}
        className="w-screen h-screen fixed flex items-center justify-center  z-20 overflow-hidden "
      >
        <div className="w-screen h-screen relative top-0 left-0 bg-black opacity-50 " />
        <div className="lg:h-[65vh] lg:w-[55vw] md:h-[65vh] md:w-[90vw] h-[80vh] w-[90vw] absolute  bg-white rounded-md shadow-md p-2 m-auto  ">
          <PokemonDetail />
        </div>
      </div>
    </>
  );
};

export default PokemonModal;
