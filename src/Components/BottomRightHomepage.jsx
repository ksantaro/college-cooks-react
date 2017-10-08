import React, { Component } from 'react';
import './BottomRightHomepage.css';


class BottomRightHomepage extends Component {
  
  render () {
    if(this.props.selected === false)
        {
            return (
            <div className="BottomRight" onClick={this.props.onClickOutside}>
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
      else {
          return (
            <div className="BottomRightFade" onClick={this.props.onClickOutside}>
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

  }
};

export default BottomRightHomepage;