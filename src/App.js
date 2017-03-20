import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='box-wrap'>
        <div className='input-box'>
          <h1>add artist</h1>
          <input className='new-artist' placeholder='Artist'/>
          <input className='submit' type='submit'/>
        </div>
      </div>
    );
  }
}

export default App;
