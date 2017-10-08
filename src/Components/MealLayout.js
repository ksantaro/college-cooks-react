import React, { Component } from 'react';
import MenuItem from './MenuItem'

class MealLayout extends Component {

  render() {
    let menuItems;
    if(this.props.menu){
      menuItems = this.props.menu.map(menu =>{
        return(
          <MenuItem menu ={menu}/>
        )
      });
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
