import React from "react";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

// Composant de carte Pokemon
const PokemonCard = () => {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <figure>
          {pokemon.imgSrc === undefined || pokemon.imgSrc === "" ? (
            <p>???</p>
          ) : (
            <img src={pokemon.imgSrc} alt={`Photo de ${pokemon.name}`} />
          )}
          <figcaption>{`Pokémon : ${pokemon.name}`}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PokemonCard;
