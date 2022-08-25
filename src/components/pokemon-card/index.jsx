import React from "react";
import TypeItem from "./type-item";

const PokemonCard = ({ props }) => {
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
        className={`w-60 h-80  mx-auto   flex flex-col justify-center items-center overflow-hidden rounded-md shadow-slate-500 shadow-md hover:scale-105 hover:cursor-pointer `}
      >
        <div className="h-2/3 w-full overflow-hidden flex">
          <div
            className={`h-72 w-full rounded-b-[48px]  -my-64 ${selectorColores(
              props?.types[0]?.type?.name
            )}`}
          >
            <div className="h-40 w-40 mx-auto my-[19rem] justify-center items-center">
              <img
                className="h-40 w-40 "
                src={props?.sprites?.other["official-artwork"].front_default}
                alt={props?.id}
              />
            </div>
          </div>
        </div>
        <div className="h-1/3 w-full flex flex-col items-center">
          <h1 className="font-bold text-2xl text-stone-900 tracking-wide drop-shadow-lg ">
            {capitalizeFirstLetter(props?.name)}
          </h1>
          <p className="font-bold text-lg text-gray-900 tracking-wide ">
            #{props?.id}
          </p>
          <div className="flex flex-row space-x-5 h-full items-end pb-4">
            {props?.types.map((type, i) => (
              <TypeItem
                key={("element-", i)}
                props={{ type: type?.type?.name }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
