import React, { Component } from 'react';
import './App.css';
import meals from './static-database/meals-database';
import ingrediants from './static-database/ingrediants-database';
import Meal from './Components/Meal';
import TopHomepage from './Components/TopHomepage'
import Logo from './Components/Logo'
import BottomLeftHomepage from './Components/BottomLeftHomepage'
import BottomRightHomepage from './Components/BottomRightHomepage'

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
      <div className='App'>
        <TopHomepage />
        <BottomLeftHomepage />
        <BottomRightHomepage />
      </div>
    );
  }
}

export default App;
