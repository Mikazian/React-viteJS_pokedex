import React from "react";

function NavBar({
  handleClickNext,
  handleClickPrev,
  pokemonIndex,
  pokemonList,
}) {
  return (
    <>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrev}>Précédent</button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
