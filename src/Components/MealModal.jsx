import React, { Component } from 'react';
import './MealModal.css';

class MealModal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quantity: 0
    };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  incrementQuantity () {
    this.setState({
      quantity: this.state.quantity + 1
    });
  }

  decrementQuantity () {
    if (this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  }

  closeModal (e) {
    console.log(e.target.className);
    if (e.target.className === 'modal-container') {
      this.props.toggleModal();
    }
  }

  render () {
    return (
      <div className='modal-container' onClick={e => this.closeModal(e)}>
        <div className='modal'>
          <div className='meal-information'>
            <div className='meal-modal-header'>
              <img className='modal-image' src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg"/>
              <span className='meal-modal-title'>{this.props.menuItem.name}</span>
            </div>
            <div className='meal-modal-section'>
              <p>Name = {this.props.menuItem.name}</p>
              <p>Price = {this.props.menuItem.price}</p>
              <p>Time = {this.props.menuItem.time}</p>
              <p>Description = {this.props.menuItem.description}</p>
              <p>quantity = {this.state.quantity}</p>
              <button className='meal-modal-add-meal' onClick={this.incrementQuantity}>Add</button>
              <button className='meal-modal-remove-meal' onClick={this.decrementQuantity}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MealModal;
