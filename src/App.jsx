import { useState } from 'react';
import PokemonApplication from './components/PokemonApplication';
import './App.css';

function App() {

  const [showPokemonApplication, setShowPokemonApplication] = useState(false);

  return (
    <>
      <div className='presentation'>
        <img className="ball" src="/Pokeball.jpg" alt="Pokeball" />
        <h1>Pokemon App</h1>
      </div>
      <button onClick={() => setShowPokemonApplication(!showPokemonApplication)}>{showPokemonApplication ? 'Hide Pokemon App' : 'Start Pokemon App'}</button>
      {showPokemonApplication && <PokemonApplication />}
    </>
  );
}

export default App;
