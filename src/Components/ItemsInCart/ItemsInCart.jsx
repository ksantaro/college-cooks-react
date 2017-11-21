import React, { Component } from 'react';
import Item from './Item';
import './ItemsInCart.css';

class ItemsInCart extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  

  render () {

    return (
      <div className="items-in-cart">
        <div className="two-third">
          <h2>Items In Cart</h2>
        </div>
        <div className="one-third">
          <h3>Price</h3>
          <h3>Quantity</h3>
        </div>
        <Item />
      </div>
    );
  }
}

export default ItemsInCart;