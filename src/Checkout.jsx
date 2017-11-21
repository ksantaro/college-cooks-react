import React, { Component } from 'react';
import meals from './static-database/meals-database.js';
import TopBar from './Components/TopBar/TopBar';
import ItemsInCart from './Components/ItemsInCart/ItemsInCart';
import ShoppingList from './Components/ShoppingList/ShoppingList';

class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    };
  }

  render () {
    return (
      <div className="checkout">
        <TopBar />
        <ItemsInCart />
        <ShoppingList />
      </div>
    );
  }
}

export default Checkout;
