import React, { Component } from 'react';
import './BottomLeftHomepage.css';


class BottomLeftHomepage extends Component {
  
  render () {
    if(this.props.selected === false)
        {
            return (
            <div className="BottomLeft" onClick={this.props.onClickOutside}>
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
      else
          {
              return (
        <div className="BottomLeftFade" onClick={this.props.onClickOutside}>
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
  }
};

export default BottomLeftHomepage;