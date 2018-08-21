import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return (
      <div className="searchContainer">
        <input className="searchInput" type="text" placeholder="Search"/>
        <button className="searchButton">
          <i className="fas fa-search"></i>
        </button>
        </div>
    );
  }
}

export default Search;
