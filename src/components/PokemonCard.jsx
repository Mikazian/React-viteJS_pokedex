// Style card
const card = {
  width: "200px",
  padding: "1rem",
  backgroundColor: "lightgreen",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px gray",
  color: "white",
  fontSize: "1.6rem",
  textAlign: "center",
  textShadow: "0px 0px 5px gray",
};

// Component card
const PokemonCard = () => {
  return (
    <figure>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbizarre"
      />
      <figcaption>Pokemon - Bulbizarre</figcaption>
    </figure>
  );
};

export default PokemonCard;
