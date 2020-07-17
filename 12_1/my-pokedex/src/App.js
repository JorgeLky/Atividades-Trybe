import React from 'react';
import './App.css';
import Pokelist from './components/pokelist';
import Pokemons from './components/data';

function App() {
  return (
    <Pokelist pokemon={Pokemons} />
  );
}

export default App;
