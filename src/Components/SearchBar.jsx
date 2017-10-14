import React, { Component } from 'react';
import { Redirect } from 'react-router';

import './SearchBar.css';


class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchbarinput : "",
      redirect: false
    };
    this.setSearchBarInput = this.setSearchBarInput.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
  }

  setSearchBarInput(e) {
    this.setState({
      searchbarinput: e.target.value
    });
  }

  onSubmitSearch(e) {
    e.preventDefault();
    this.setState({
      redirect: true
    })
  }

  render () {
    if (this.state.redirect) {
      const routeString = '/browse/' + this.state.searchbarinput;
      return <Redirect push to={routeString} />;
    }
    return (
      <div className="Search">
      <form onSubmit={e => this.onSubmitSearch(e)}>
          <input onChange={(e) => this.setSearchBarInput(e)} type="text" name="search" placeholder="Search for a recipe...">{this.searchbarinput}</input>
     </form>  
      </div>
    );
  }
};

export default SearchBar;
  