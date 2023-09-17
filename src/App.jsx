import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

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
        <PokemonCard pokemonName={pokemon.name} pokemonImage={pokemon.imgSrc} />
      </div>
    </main>
  );
}

export default App;
