import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";
import NavBar from "./components/NavBar";

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

function SwitchPokemon({ pokemonIndex, setPokemonIndex }) {
  function handleClickNext() {
    setPokemonIndex(pokemonIndex + 1);
  }
  function handleClickPrev() {
    setPokemonIndex(pokemonIndex - 1);
  }
  return (
    <NavBar
      handleClickNext={handleClickNext}
      handleClickPrev={handleClickPrev}
      pokemonIndex={pokemonIndex}
      pokemonList={pokemonList}
    />
  );
}

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  // const handleClickNext = () => {
  //   setPokemonIndex(pokemonIndex + 1);
  // };

  // const handleClickPrev = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // };

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

      <div>
        <SwitchPokemon
          setPokemonIndex={setPokemonIndex}
          pokemonIndex={pokemonIndex}
        />
      </div>
    </main>
  );
}

export default App;
