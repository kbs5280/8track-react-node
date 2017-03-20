import React, { Component } from 'react';

class CreateArtist extends Component {
  render() {
    return(
      <div className='input-box'>
        <h1 className='box-header'>add artist</h1>
        <input className='new-artist' placeholder='Artist'/>
        <input className='submit' type='submit'/>
      </div>
    )
  }
}

export default CreateArtist;
