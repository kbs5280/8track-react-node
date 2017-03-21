import React, { Component } from 'react';

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }

  mouseEnter() {
    console.log('mouse enters');
    this.setState({ hovered: true });
  }

  mouseLeave() {
    console.log('mouse leaves');
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div className='artist'
           onMouseEnter={this.mouseEnter.bind(this)}
           onMouseLeave={this.mouseLeave.bind(this)}>
        {this.props.name}
      </div>
    )
  }
}

export default Artist;
