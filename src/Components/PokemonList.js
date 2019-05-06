import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class PokemonList extends Component {
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
          loading: true,
          fetched: true
        });
      });
  }

  render() {
    const { fetched, loading, species } = this.state;
    let content;
    if (fetched) {
      content = (
        <div className='pokemon--species--list'>
          {species.map((pokemon, index) => (
            <Pokemon
              key={index}
              id={index + 1}
              pokemon={pokemon}
              url={pokemon.url}
            />
          ))}
        </div>
      );
    } else if (loading && !fetched) {
      content = <p>Loading...</p>;
    } else {
      content = null;
    }
    return <div>{content}</div>;
  }
}
