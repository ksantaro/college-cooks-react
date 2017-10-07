import React, { Component } from 'react';
import './BottomRightHomepage.css';


class BottomRightHomepage extends Component {
  
  render () {
    return (
        <div className="BottomRight">
            <p>Featured</p>
            <div className="leftimage">
                <img src="Sample3.jpg" alt="ERROR"></img>
            </div>
            <div className="rightimage">
                <img src="Sample4.jpg" alt="ERROR"></img>
            </div>
        </div>
      
        
    );
  }
};

export default BottomRightHomepage;