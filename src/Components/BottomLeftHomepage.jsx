import React, { Component } from 'react';
import './BottomLeftHomepage.css';


class BottomLeftHomepage extends Component {
  
  render () {
    return (
        <div className="BottomLeft">
            <p>New</p>
            <div className="leftimage">
                <img src="Sample1.jpg" alt="ERROR"></img>
            </div>
            <div className="rightimage">
                <img src="Sample2.jpg" alt="ERROR"></img>
            </div>
        </div>
      
        
    );
  }
};

export default BottomLeftHomepage;