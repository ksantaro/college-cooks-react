import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchbarinput : ""
    };
  }

  render () {
    
    return (
      <div className="Search">
      <form>
          <input type="text" name="search" placeholder="Search for a recipe..."></input>
     </form>  
      </div>
    );
  }
};

export default SearchBar;
  