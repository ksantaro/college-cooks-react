import React, { Component } from 'react';
import './App.css';
import meals from './static-database/meals-database';
import ingrediants from './static-database/ingrediants-database';
import Meal from './Components/Meal';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      meals,
      ingrediants,
      selectedMeals: []
    };
  }

  render () {
    console.log(this.state.meals);
    const mealItems = this.state.meals.map((meal) =>
      <Meal
        meal={meal}
      />
    );
    console.log(mealItems);
    return (
      <div className='App'>
        <div className='meals-collection'>
          {mealItems}
        </div>
      </div>
    );
  }
}

export default App;
