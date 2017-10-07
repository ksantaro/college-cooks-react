import React, { Component } from 'react';
import Logo from "./Logo.jsx"
import SearchBar from "./SearchBar.jsx"
import ShoppingCartButton from "./ShoppingCartButton.jsx"
import './TopHomepage.css';


class TopHomepage extends Component {
  
  render () {
    return (
        <div className="Top">
            <Logo/>
            <SearchBar/>
            <ShoppingCartButton/>
        </div>
      
        
    );
  }
};

export default TopHomepage;