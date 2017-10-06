import React, { Component } from 'react';
import './Meal.css';

class Meal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }
  render () {
    const meal = this.props.meal;
    return (
      <div class="meal-item">{meal.name}</div>
    );
  }
};

export default Meal;
