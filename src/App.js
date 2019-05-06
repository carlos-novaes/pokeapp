import React, { Component } from 'react';
import PokemonList from './Components/PokemonList';

class App extends Component {
  render() {
    return (
      <div className='pokeapp'>
        <h1>The Kanto PokeDex!</h1>
        <PokemonList />
      </div>
    );
  }
}

export default App;
