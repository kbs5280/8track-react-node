import React, { Component } from 'react';
import Artist from './artist';

class Artists extends Component {
  sortArtists() {

    const artistSongs = {}

    this.props.artists.forEach((artist) => {
      if (!Object.keys(artistSongs).includes(artist.name)) {
        artistSongs[artist.name] = {songs: [artist.title]};
      } else {
        artistSongs[artist.name]['songs'].push(artist.title);
      }
    })
    console.log(artistSongs);
  }


  renderArtists() {
    return this.props.artists.map((artist, index) =>
      <Artist key={ index }
              id={ artist.id }
              name={ artist.name } />);
  }

  render() {
    return(
      <div className='artists'>
        {this.sortArtists()}
      </div>
    )
  }
}

export default Artists;
