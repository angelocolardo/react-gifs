import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (event) => {
   this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input type="text" className="form-control form-search" placeholder="Search gifs (w/React🎉)" onChange={this.handleChange} />

      );
  }
}

export default SearchBar;
