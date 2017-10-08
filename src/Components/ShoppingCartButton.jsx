import React, { Component } from 'react';
import './ShoppingCartButton.css';


class ShoppingCartButton extends Component {
  
  render () {
      if(this.props.selected === false){
          return (
            <img onClick={this.props.onClickInside} className="shoppingcart" src="shoppingcart.png" alt="Error"></img>
        );
      }
      else {
          return (
            <img onClick={this.props.onClickOutside} className="shoppingcart" src="shoppingcart.png" alt="Error"></img>
        );
      }
    
  }
};

export default ShoppingCartButton;