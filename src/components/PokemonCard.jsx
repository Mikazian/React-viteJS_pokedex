import React from "react";

const PokemonCard = ({ pokemonName, pokemonImage }) => {
  return (
    <div>
      <figure>
        {pokemonImage === undefined || pokemonImage === "" ? (
          <p>???</p>
        ) : (
          <img src={pokemonImage} alt={`Image ${pokemonName}`} />
        )}
        <figcaption>
          {`Pokémon : ${
            pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
          }`}
        </figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
