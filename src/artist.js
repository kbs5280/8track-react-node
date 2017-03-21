import React, { Component } from 'react';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }

  renderSongs() {
    console.log('mouse enters');
    this.setState({ hovered: true });
  }

  removeSongs() {
    console.log('mouse leaves');
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div className='artist'
           onMouseEnter={this.renderSongs.bind(this)}
           onMouseLeave={this.removeSongs.bind(this)}>
        {this.props.name}
      </div>
    )
  }
}

export default Artist;
