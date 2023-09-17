import PokemonCard from "./components/PokemonCard";
import MyTitle from "./components/MyTitle";

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

function App() {
  const pokemon = pokemonList[0];

  return (
    <main>
      {/* container title */}
      <div>
        <MyTitle />
      </div>

      {/* container pokemon card */}
      <div>
        <PokemonCard pokemon={pokemon} />
      </div>
    </main>
  );
}

export default App;
