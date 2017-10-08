import React, { Component } from 'react';
import Logo from "./Logo.jsx"
import SearchBar from "./SearchBar.jsx"
import ShoppingCartButton from "./ShoppingCartButton.jsx"
import './TopHomepage.css';


class TopHomepage extends Component {
  
  render () {
      if(this.props.selected === false) {
        return (
        <div className="Top" onClick={this.props.onClickOutside}>
            <Logo/>
            <SearchBar/>
        </div>
      
        
        );
      }
      else {
          return (
            <div className="TopFade" onClick={this.props.onClickOutside}>
                  <Logo/>
                  <SearchBar/>
              </div>
      
        
        );
      }
    
  }
};

export default TopHomepage;