import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class PokemonList extends Component {
  render() {
    const { fetched, loading } = this.props.initialData;
    let content;
    if (fetched) {
      content = (
        <div className='pokemon--species--list'>
          {this.props.filteredSpecies.map((pokemon, index) => (
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
