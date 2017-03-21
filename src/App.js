import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './header';
import CreateArtist from './create-artist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: []
    };
  }

  componentDidMount() {
    Axios.get('https://node-8track.herokuapp.com/api/v1/artists')
      .then((response) => {
        console.log(response.data);
        // this.setState({ artists: response.data });
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
        </div>
      </div>
    );
  }
}

export default App;
