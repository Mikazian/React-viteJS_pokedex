import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

const pokemonList = [
  {
    name: "bulbizarre",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "salamèche",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "carapuce",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickPrev = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <main>
      {/* container title */}
      <div>
        <MyTitle />
      </div>

      {/* container pokemon card */}
      <div>
        <PokemonCard pokemon={currentPokemon} />
      </div>

      {/* button previous for switch pokemon */}
      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrev}>Précèdent</button>
      ) : (
        ""
      )}

      {/* button next for switch pokemon */}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : (
        ""
      )}
    </main>
  );
}

export default App;
