import React from "react";
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <figure>
        {/* Display image if pokemon got it */}
        {pokemon.imgSrc === undefined || pokemon.imgSrc === "" ? (
          <p>???</p>
        ) : (
          <img src={pokemon.imgSrc} alt={`Image ${pokemon.name}`} />
        )}
        <figcaption>
          {`Pokémon : ${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }`}
        </figcaption>
      </figure>
    </div>
  );
};

// Type of props
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }),
};

export default PokemonCard;
