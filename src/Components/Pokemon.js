import React, { Component } from 'react';

export default class Pokemon extends Component {
  state = {
    img: null
  };

  componentWillMount() {
    const { id } = this.props;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(res => {
        console.log(res.sprites.front_default);
        this.setState({
          img: res.sprites.front_default
        });
      });
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div className='pokemon--species'>
        <div className='pokemon--species--container'>
          <div className='pokemon--species--sprite'>
            <img alt={pokemon.name} src={this.state.img} />
          </div>
          <div className='pokemon--species--name'> {pokemon.name} </div>
        </div>
      </div>
    );
  }
}
