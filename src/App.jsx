import React, { Component } from 'react';
import './App.css';
import meals from './static-database/meals-database';
import ingrediants from './static-database/ingrediants-database';
import MealLayout from './Components/MealLayout';

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
    return (
      <div className="App">
        <MealLayout menu={this.state.meals}/>
      </div>
    );
  }
}

export default App;
