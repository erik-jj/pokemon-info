import React from "react";

const NoMatch = () => {
  return (
    <div className="w-2/3 sm:w-1/3 p-3 border-2 border-red-400  rounded-md  absolute top-32 mx left-0 right-0 mx-auto ">
      <p className="text-center text-lg  text mb-6">
        Ningún Pokémon coincide con tu búsqueda.
      </p>
      <img
        className="w-32 h-32 mx-auto"
        src="https://cdn-icons-png.flaticon.com/512/361/361998.png"
      ></img>
    </div>
  );
};

export default NoMatch;
