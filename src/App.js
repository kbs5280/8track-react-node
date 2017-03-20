import React, { Component } from 'react';
import './App.css';
import Header from './header';
import CreateArtist from './create-artist';

class App extends Component {
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
