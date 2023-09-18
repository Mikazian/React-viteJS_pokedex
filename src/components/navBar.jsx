import React, { useEffect } from "react";

function NavBar({
  handleClickNext,
  handleClickPrev,
  pokemonIndex,
  pokemonList,
}) {
  useEffect(() => {
    if (pokemonIndex === 3) {
      console.log("HELLO PIKACHU", pokemonIndex);
      alert("Pika Pikachuu !");
    }
  });

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
