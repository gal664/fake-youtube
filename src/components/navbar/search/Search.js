import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
  render() {
    return (
      <div class="searchContainer">
        <input class="searchInput" type="text" placeholder="Search"/>
        <button class="searchButton">
          <i class="fas fa-search"></i>
        </button>
        </div>
    );
  }
}

export default Search;
