import React, { Component } from 'react';

class Artist extends Component {
  render() {
    return (
      <div className='artist'>
        {this.props.name}
      </div>
    )
  }
}

export default Artist;
