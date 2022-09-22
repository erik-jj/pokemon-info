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
      <div className=" flex flex-col items-center overflow-hidden  w-full h-full justify-around">
        <div className="flex flex-col  gap-2 md:w-5/6  w-full ">
          <span className="text-3xl font-bold tracking-wide mx-auto text-black ">{`${
            pokemonSeleccionado?.name.charAt(0).toUpperCase() +
            pokemonSeleccionado?.name.slice(1)
          } #${pokemonSeleccionado?.id}`}</span>
          <div className=" flex flex-col md:flex-row justify-center md:gap-10 gap-2 items-center w-full h-full">
            <img
              className=" w-52 h-52 md:w-60 md:h-60"
              src={
                pokemonSeleccionado?.sprites?.other["official-artwork"] ?.front_default
                //pokemonSeleccionado?.sprites?.versions["generation-v"]["black-white"].animated?.front_default
              }
              alt={pokemonSeleccionado?.name}
            />
            <div className="flex flex-col ">
              <p className="text-xl font-bold tracking-wide text-black">{`Characteristics:`}</p>
              <p className="text-md italic  text-gray-700">{`Height: ${pokemonSeleccionado?.height/10}m`}</p>
              <p className="text-md italic  text-gray-700">{`Wight: ${pokemonSeleccionado?.weight/10}kg`}</p>
            </div>
          </div>

          <div className="md:max-w-lg w-full md:w-3/4 lg:w-5/6 xl:w-2/3 mx-auto ">
            <p className="text-xl font-bold tracking-wide text-black pb-1">
              Stats:
            </p>
            <ul className="bg-slate-600  flex flex-row  items-start justify-center md:justify-between  gap-2 rounded-md  overflow-x-auto  mx-auto ">
            <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className="md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[0]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    HP
                  </span>
                </div>
              </li>
              <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className="md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none  `}
                    style={{
                      height: pokemonSeleccionado?.stats[1]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Atk.
                  </span>
                </div>
              </li>
              <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className="md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[2]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Def.
                  </span>
                </div>
              </li>
              <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className="md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[3]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Sp. Atk.
                  </span>
                </div>
              </li>
              <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className="md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full  bg-blue-400 rounded-none  `}
                    style={{
                      height: pokemonSeleccionado?.stats[4]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Sp. Def.
                  </span>
                </div>
              </li>
              <li className="my-1 py-1 flex justify-center items-center flex-col">
                <div className=" md:w-4 w-3 h-32 bg-white rounded relative overflow-hidden flex flex-col-reverse">
                  <div
                    className={`w-full bg-blue-400 rounded-none`}
                    style={{
                      height: pokemonSeleccionado?.stats[5]?.base_stat + "%",
                    }}
                  />
                </div>
                <div className="flex justify-center  text-center md:w-16 w-12 ">
                  <span className="text-xs md:text-md font-bold text-white  font-mono ">
                    Spd.
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
