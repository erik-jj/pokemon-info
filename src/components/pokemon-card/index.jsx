import React, { useContext } from "react";
import { AppContext } from "../../context/provider";
import TypeItem from "./type-item";

const PokemonCard = ({ props }) => {
  const [state, setState] = useContext(AppContext);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const selectorColores = (tipo) => {
    switch (tipo) {
      case "normal":
        return "bg-[#8a8a59]";
      case "fire":
        return "bg-[#f08030]";
      case "water":
        return "bg-[#6890f0]";
      case "electric":
        return "bg-[#f8d030]";
      case "grass":
        return "bg-[#78c850]";
      case "ice":
        return "bg-[#98d8d8]";
      case "fighting":
        return "bg-[#c03028]";
      case "poison":
        return "bg-[#a040a0]";
      case "ground":
        return "bg-[#e0c068]";
      case "flying":
        return "bg-[#a890f0]";
      case "bug":
        return "bg-[#a8b820]";
      case "psychic":
        return "bg-[#f85888]";
      case "rock":
        return "bg-[#b8a038]";
      case "ghost":
        return "bg-[#705898]";
      case "dragon":
        return "bg-[#7038f8]";
      case "steel":
        return "bg-[#b8b8d0]";
      case "dark":
        return "bg-[#705848]";
      case "fairy":
        return "bg-[#e898e8]";
    }
  };
  return (
    <>
      <div
        onClick={() => setState({ ...state, pokemonSeleccionado: props })}
        className={`w-56 h-80  mx-auto  my-4  flex flex-col justify-center items-center overflow-hidden rounded-md shadow-slate-500 shadow-md hover:scale-105 hover:cursor-pointer  
        )} `}
      >
        <div className="h-2/3 w-full overflow-hidden flex items-center justify-center relative ">
          <div
            className={`absolute h-72 w-72 rounded-full opacity-40 -mt-[25rem] ${selectorColores(
              props?.types[0]?.type?.name
            )} `}
          ></div>
          <div className="h-full w-full  relative flex items-center justify-center ">
            <img
              className="h-4/5 w-4/5 "
              src={props?.sprites?.other?.dream_world.front_default}
              //  src={props?.sprites?.other?['official-artwork'].front_default}

              alt={props?.id}
            />
          </div>
        </div>
        <div className="h-1/3 w-full flex flex-col justify-center ">
          <h1 className="font-bold text-2xl text-stone-900 tracking-wide  mx-auto ">
            {capitalizeFirstLetter(props?.name)}
          </h1>

          <div className="flex flex-row space-x-8 h-full  items-end pb-4 mx-auto -my-1">
            {props?.types.map((type, i) => (
              <TypeItem
                key={("element-", i)}
                props={{ type: type?.type?.name }}
              />
            ))}
          </div>
          <p className="font-bold relative  text-right text-gray-700 mr-2 tracking-wide ">
            #{props?.id}
          </p>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
