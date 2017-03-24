import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './header';
import CreateArtist from './create-artist';
import Artists from './artists';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };
  }

  componentWillMount() {
    const artistSongs = []

    Axios.get('https://node-8track.herokuapp.com/api/v1/artists-songs')
      .then((response) => {
        response.data.forEach((artist) => {
          if (!Object.keys(artistSongs).includes(artist.name)) {
            artistSongs[artist.name] = {songs: [artist.title]};
          } else {
            artistSongs[artist.name]['songs'].push(artist.title);
          }
        })
        this.setState({ artists: artistSongs });
      });
  }

  render() {
    return (
      <div>
        <header className='header'>
        </header>
        <div className='box-wrap'>
          <Header />
          <CreateArtist />
          <Artists artists={this.state.artists} />
        </div>
      </div>
    );
  }
}

export default App;
