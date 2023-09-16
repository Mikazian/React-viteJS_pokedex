import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <main>
      {/* container title */}
      <div>
        <MyTitle />
      </div>

      {/* container pokemon card */}
      <div>
        <PokemonCard />
      </div>
    </main>
  );
}

export default App;
