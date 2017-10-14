import React, { Component } from 'react';

import MealModal from './MealModal';
import './MenuItem.css';

class MenuItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal () {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    console.log("MenuItem");
    console.log(this.props);
    return (
      <div className="menu-item">
        {this.state.modalOpen ? <MealModal menuItem={this.props.menuItem} toggleModal={this.toggleModal} /> : null}
        <div className="image-holder" onClick={this.toggleModal}>
          <img className ='image' src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg"/>
        </div>
        <div className="image-info" onClick={this.toggleModal}>
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
