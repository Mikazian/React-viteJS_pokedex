import React, { useState } from "react";
import { useEffect } from "react";
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
  // return a navbar component
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <NavBar
      handlePokemonClick={handlePokemonClick}
      pokemonIndex={pokemonIndex}
      setPokemonIndex={setPokemonIndex}
      pokemonList={pokemonList}
    />
  );
}

function App() {
  // userState for getter/setter index pokemon list
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const currentPokemon = pokemonList[pokemonIndex];

  // useEffect for display an alert
  useEffect(() => {
    if (pokemonIndex === 0) {
      alert("Bonjour entraîneur de Pokémon !");
    }
  }, []);

  return (
    <>
      {/* container title */}
      <div>
        <MyTitle />
      </div>

      {/* container pokemon card */}
      <div>
        <PokemonCard pokemon={currentPokemon} />
      </div>

      {/* button for switch pokemon */}
      <div>
        <SwitchPokemon
          setPokemonIndex={setPokemonIndex}
          pokemonIndex={pokemonIndex}
        />
      </div>
    </>
  );
}

export default App;
