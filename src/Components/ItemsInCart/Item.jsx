import React, { Component } from 'react';
import Select from 'react-select';


const quantityList =[
  {value: '0', label: '0'},
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
  {value: '4', label: '4'},
  {value: '5', label: '5'},
  
]
class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: "0",
    };
  }

  changeVal = (option) => {
    const label = option.label;
    this.setState({
      quantity: label,
    });
  }

  

  render () {
    return (
      <div className="item">
        <div className="two-third">
          <div className="item-image">
            {/* Img in here currently placeholder */}
          </div>
          <h2>Food Name</h2>
        </div>
        <div className="one-third">
          <span>Price</span>
          <span>
            <Select
              name="option"
              value={this.state.quantity}
              options={quantityList}
              onChange={this.changeVal}
              searchable={false}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Item;