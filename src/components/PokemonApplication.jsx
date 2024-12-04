import { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function PokemonApplication() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const getPokemonList = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const json = await response.json();
        setPokemonList(json.results);
    };
    getPokemonList();
  }, []);

  const thePokemonData = async () => {
    if (!selectedPokemon) return;
    const response = await fetch(selectedPokemon);
    const json = await response.json();
    setPokemonData(json);
  };

  return (
    <>
      <div className="makeAChoice">
        <h2>Choose your Pokemon</h2>
        <select className="pokemonSelect" onChange={(e) => setSelectedPokemon(e.target.value)}>
            {pokemonList.map((pokemon) => (
                <option key={pokemon.url} value={pokemon.url}>
                {pokemon.name}
                </option>
            ))}
        </select>

        <button onClick={thePokemonData}>Get Pokemon Info</button>

        {pokemonData && <Pokemon pokemonData={pokemonData} />}
      </div>
    </>
  );
}

export default PokemonApplication;


