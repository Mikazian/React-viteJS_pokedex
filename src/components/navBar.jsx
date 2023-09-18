import React, { useEffect } from "react";

function NavBar({ pokemonIndex, pokemonList, handlePokemonClick }) {
  // Display an alert when the pokemon is Pikachu
  useEffect(() => {
    if (pokemonIndex === 3) {
      alert("Pika Pikachuu !");
    }
  });

  // Button who display the pokemon's name with a button
  function PokemonBtn({ pokemon, index }) {
    return (
      <button onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
    );
  }

  return (
    <>
      {/* Boucle in the pokemon list and display all pokemon */}
      {pokemonList.map((pokemon, index) => (
        <PokemonBtn key={index} pokemon={pokemon} index={index} />
      ))}
    </>
  );
}

export default NavBar;
