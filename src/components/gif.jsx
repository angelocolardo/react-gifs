import React, { Component } from 'react';

class Gif extends Component {

  render() {
    return (
      <div className="selected-gif">
      <img src={`https://media0.giphy.com/media/${this.props.id}/giphy.gif`} alt="" className="gif"/>
      </div>

      )
  }
}

export default Gif;
