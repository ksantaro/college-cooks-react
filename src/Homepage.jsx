import React, { Component } from 'react';
import './App.css';
import meals from './static-database/meals-database';
import ingrediants from './static-database/ingrediants-database';
import Meal from './Components/Meal';
import TopHomepage from './Components/TopHomepage'
import Logo from './Components/Logo'
import BottomLeftHomepage from './Components/BottomLeftHomepage'
import BottomRightHomepage from './Components/BottomRightHomepage'
import ShoppingCartButton from './Components/ShoppingCartButton'
import ShoppingCart from './Components/ShoppingCart'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      meals,
      ingrediants,
      selectedMeals: [],
      selected: false
    };
    this.onClickOutside = this.onClickOutside.bind(this);
    this.onClickInside = this.onClickInside.bind(this);
  }
  onClickOutside() {
      this.setState({
          selected: false
      })
      console.log("Selected = false");
  }
  onClickInside() {
      this.setState({
          selected: true
      })
      console.log("Selected = true");
  }
  addNewMealToCart(meal){
      var newMeals = this.state.selectedMeals;
      //count keeps track of the number of cards added to the array of images on website
      newMeals[newMeals.size] = meal;
      this.setState({
          selectedMeals: newMeals
      })
      console.log("Meal Added");
      
  }

  render () {
    if(this.state.selected === false)
        {
            return (
                <div className='App'>
                    <ShoppingCartButton selectedMeals={this.props.selectedMeals} onClickInside={this.onClickInside} selected={this.state.selected}/>
                    <TopHomepage selectedMeals={this.state.selectedMeals} onClickOutside={this.onClickOutside} onClickInside={this.onClickInside} selected={this.state.selected}/>
                    <BottomLeftHomepage addNewMeal={this.addNewMealToCart} onClickOutside={this.onClickOutside} selected={this.state.selected} />
                    <BottomRightHomepage addNewMeal={this.addNewMealToCart} onClickOutside={this.onClickOutside} selected={this.state.selected}/>
                </div> 
            );
        }
      else{
          return(
          <div className='App'>
                    <ShoppingCartButton selectedMeals={this.props.selectedMeals} selected={this.state.selected}
                        onClickOutside={this.onClickOutside}/>
                    <ShoppingCart selectedMeals={this.props.selectedMeals} onClickInside={this.onClickInside} selected={this.state.selected}/>
                   
                    <TopHomepage selectedMeals={this.state.selectedMeals} onClickOutside={this.onClickOutside} onClickInside={this.onClickInside} selected={this.state.selected}/>
                    <BottomLeftHomepage addNewMeal={this.addNewMealToCart} onClickOutside={this.onClickOutside} selected={this.state.selected}/>
                    <BottomRightHomepage addNewMeal={this.addNewMealToCart} onClickOutside={this.onClickOutside} selected={this.state.selected}/>
                </div> 
          );
      }
    
  }
}

export default App;
