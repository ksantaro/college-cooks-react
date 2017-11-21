import React, { Component } from 'react';

import MealModal from './MealModal';
import './MenuItem.css';

class MenuItem extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    console.log("MenuItem");
    console.log(this.props);
    return (
      <div className="menu-item">
        <div className="image-holder">
          <img className ='image' src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg"/>
        </div>
        <div className="image-info">
          <h3>{this.props.menuItem.name}</h3>
          <div className="menu-detail">
            <span className="menu-price">{this.props.menuItem.price}</span>
            <span className="menu-time">{this.props.menuItem.time}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
