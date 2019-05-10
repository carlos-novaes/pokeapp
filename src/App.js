import React, { Component } from 'react';
import PokemonList from './Components/PokemonList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    species: [],
    fetched: false,
    loading: false
  };

  componentWillMount() {
    this.setState({
      loading: true
    });
    fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(response => {
        this.setState({
          species: response.results,
          search: '',
          loading: true,
          fetched: true
        });
      });
  }

  searchHandler = e => this.setState({ search: e.target.value });

  render() {
    const filteredSpecies = this.state.species.filter(specie =>
      specie.name.includes(this.state.search)
    );

    return (
      <div className='pokeapp'>
        <h1>The Kanto PokeDex!</h1>
        <Filter search={this.searchHandler} />
        <PokemonList
          initialData={this.state}
          filteredSpecies={filteredSpecies}
        />
      </div>
    );
  }
}

export default App;
