import React from 'react';

class pokecard extends React.Component {
  render(){
    const {id, name, type, averageWeight, image, moreInfo} = this.props.pokemon
    return(
      <div>
        <ul>
          <li>{name}</li>
          <li>{id}</li>
          <li> {type} </li>
          <img src={image} />
          <li> {averageWeight.value} {averageWeight.measurementUnit} </li>
          <link src={moreInfo} value="More info" />
        </ul>
      </div>
    )
  }
}

export default pokecard;