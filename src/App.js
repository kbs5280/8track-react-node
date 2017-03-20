import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className='header'>
        </header>
        <div className='box-wrap'>
          <h1 className='header'>8Track</h1>
          <div className='input-box'>
            <h1 className='box-header'>add artist</h1>
            <input className='new-artist' placeholder='Artist'/>
            <input className='submit' type='submit'/>
          </div>
        </div>
        </div>
    );
  }
}

export default App;
