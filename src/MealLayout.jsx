import React, { Component } from 'react';
import MenuItem from './Components/MenuItem';
import meals from './static-database/meals-database.js';
import {connect} from 'react-redux';
import {incrementCounter} from './actions';

class MealLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    };
  }

  componentWillMount() {
    let searchMeals = [];
    if (this.props.match.params.id) {
      meals.forEach((meal) => {
        if (meal.name.toLocaleLowerCase().includes(this.props.match.params.id.toLocaleLowerCase())) {
          searchMeals.push(meal);
        }
      });
    } else {
      searchMeals = meals;
    }
    this.setState({
      meals: searchMeals
    });
  }

  render () {
    let menuItems;
    if (this.state.meals) {
      menuItems = this.state.meals.map(menuItem =>
        <MenuItem menuItem={menuItem} />
      );
    }
    const noMeals = (<div style={{fontSize: '48px', margin: "20px"}}>No meals found</div>); // Currently placehold will be made into a component in the future.
    return (
      <div className="menu">
        {menuItems.length > 0 ? menuItems : noMeals}
        <div>HERE IS THE NUMBER: {this.props.counter}</div>
        <button onClick={this.props.incrementCounter}>Increment</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MealLayout);
