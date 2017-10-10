import React, { Component } from 'react';
import MenuItem from './Components/MenuItem';
import meals from './static-database/meals-database.js';

class MealLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meals: []
    };
  }

  componentWillMount() {
    const searchMeals = meals;
    if (this.props.match.params.id) {
      alert(this.props.match.params.id);
    }
    this.setState({
      meals: searchMeals
    });
  }

  render() {
    let menuItems;
    if(meals){
      menuItems = meals.map(menuItem =>
        <MenuItem menuItem={menuItem} />
      );
    }
    console.log(this.props);
    return (
      <div className="menu">
        {menuItems}
      </div>
    );
  }
}

export default MealLayout;