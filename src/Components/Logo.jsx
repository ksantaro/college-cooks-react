import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  
  render () {
    return (
        <div className = "Logo">
            <p className="collegecooks">College Cooks</p>
            <br></br>
            <p className="recipe">Recipes</p>
        </div>
      
    );
  }
};

export default Logo;