function Pokemon({ pokemonData }) {

    return (
      <>
      <div className="container"> 
        <div className="pokemonCard">
          <p>Name: {pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Types: {pokemonData.types.map((typeInfo) => typeInfo.type.name)}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Height: {pokemonData.height}</p>
        </div>
      </div>
      </>
    );
  }
  
  export default Pokemon;