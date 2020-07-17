import React from 'react';
import Pokecard from './pokecard'

class pokelist extends React.Component {
  render() {
    const { pokemons } = this.props;
    return(
      <div>
      { pokemons.map((pokemon) => <Pokecard pokemon={pokemon} key={pokemon.name} />)}
      </div>
    )
  }
}

export default pokelist