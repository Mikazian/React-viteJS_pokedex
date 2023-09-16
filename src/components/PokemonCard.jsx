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
      {/* Boucle sur le tableau pokémon pour les afficher dynamiquement */}
      {pokemonList.map((pokemon, index) => (
        <figure>
          {/* Tenaire qui affiche "???"" si aucune image associée au pokémon */}
          {pokemon.imgSrc === undefined || pokemon.imgSrc === "" ? (
            <p>???</p>
          ) : (
            <img src={pokemon.imgSrc} alt={`Photo de ${pokemon.name}`} />
          )}
          <figcaption>{`#${index + 1} Pokémon : ${
            // chartAt(0) extrait la première lettre, toUpperCase() mettre la lettre en majuscule
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }.`}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default PokemonCard;
