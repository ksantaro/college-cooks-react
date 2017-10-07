import React, { Component } from 'react';
import './ShoppingCartButton.css';


class ShoppingCartButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listOfMeals: []
    };
  }

  render () {
    
    return (
      <img className="shoppingcart" src="shoppingcart.png" alt="Error"></img>
    );
  }
};

export default ShoppingCartButton;