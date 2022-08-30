import React, { useContext, useState } from "react";
import { AppContext } from "../../context/provider";

const PokemonDetail = () => {
  const [state, setState] = useContext(AppContext);
  const { pokemonSeleccionado } = state;

  const obtenerValorStat = (stat) => {
    switch (stat) {
      case "ps":
        return `h-[${pokemonSeleccionado?.stats[0]?.base_stat}] `;
    }
  };
  return (
    <>
      <div className=" p-1 flex flex-col items-center overflow-hidden  w-full h-full justify-around">
        <div className="flex flex-col  gap-2 md:w-5/6  w-full ">
          <span className="text-3xl font-bold tracking-wide mx-auto text-black ">{`${
            pokemonSeleccionado?.name.charAt(0).toUpperCase() +
            pokemonSeleccionado?.name.slice(1)
          } #${pokemonSeleccionado?.id}`}</span>
          <div className=" flex flex-col md:flex-row justify-center gap-4 items-center w-full h-full">
            <img
              className=" w-52 h-52 md:w-60 md:h-60  "
              src={
                pokemonSeleccionado?.sprites?.other["official-artwork"]
                  ?.front_default
              }
              alt={pokemonSeleccionado?.name}
            />
            <div className="flex flex-col ">
              <p className="text-xl font-bold tracking-wide text-black">{`Características:`}</p>
              <p className="text-md italic  text-gray-700">{`Peso: ${pokemonSeleccionado?.height}kg`}</p>
              <p className="text-md italic  text-gray-700">{`Altura: ${pokemonSeleccionado?.weight}cm`}</p>
            </div>
          </div>

          <div className="w-full md:w-4/5 mx-auto">
            <p className="text-xl font-bold tracking-wide text-black">
              Estadísticas:
            </p>
            <ul className="bg-slate-600  flex flex-row  items-start justify-between  rounded-md  overflow-x-auto p-2 mx-auto">
              <li className="my-1 p-1 flex justify-center items-center flex-col">
                <div className="md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[0]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    PS
                  </span>
                </div>
              </li>
              <li className="my-1  p-1 flex justify-center items-center flex-col">
                <div className="md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none  `}
                    style={{
                      height: pokemonSeleccionado?.stats[1]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Ataque
                  </span>
                </div>
              </li>
              <li className="my-1 p-1 flex justify-center items-center flex-col">
                <div className="md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[2]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Defensa
                  </span>
                </div>
              </li>
              <li className="my-1  p-1 flex justify-center items-center flex-col">
                <div className="md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[3]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Ataque Especial
                  </span>
                </div>
              </li>
              <li className="my-1 p-1 flex justify-center items-center flex-col">
                <div className="md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none  `}
                    style={{
                      height: pokemonSeleccionado?.stats[4]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Defensa Especial
                  </span>
                </div>
              </li>
              <li className="my-1  p-1 flex justify-center items-center flex-col">
                <div className=" md:w-5 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[5]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Velocidad
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
