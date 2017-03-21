import React, { Component } from 'react';
import Artist from './artist';

class Artists extends Component {
  renderArtists() {

    return this.props.artists.map((artist, index) =>
      <Artist key={ index }
              id={ artist.id }
              name={ artist.name } />);
  }

  render() {
    return(
      <div className='artists'>
        {this.renderArtists()}
      </div>
    )
  }
}

export default Artists;
