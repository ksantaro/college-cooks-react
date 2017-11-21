import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './TopBar.css';

const searchBy = [
  { value: 'category', label: 'Category' },
  { value: 'price', label: 'Price' },
  { value: 'none', label: 'None'},
];

const categories = [
  {value: 'italian', label: 'Italian'},
  {value: 'mexican', label: 'Mexican'},
];

const prices = [
  {value: '$', label: '$'},
  {value: '$$', label: '$$'},
  {value: '$$$', label: '$$$'},
  {value: '$$$$', label: '$$$$'},
];

const none = [
  {value: 'none', label: 'none'}
];

const searchByOptions = {
  'category' : categories, 'price' : prices, 'none' : none,
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBy: 'none',
      option: 'none',
    }
  }

  changeVal = (value, name) => {
    console.log('Selected' , value, name);
    this.setState({
      [name]: value.value,
    });
  }

  render() {
    return (
      <div className="topbar-container">
        <span className="topbar-container-title">College Cooks</span>
        <div className="topbar-dropdown">
          <Select
            name="searchBy"
            value={this.state.searchBy}
            options={searchBy}
            onChange={(value, name) => this.changeVal(value, "searchBy")}
            searchable={false}
          />
        </div>
          
        <div className="topbar-dropdown">
          <Select
            name="option"
            value={this.state.option}
            options={searchByOptions[this.state.searchBy]}
            onChange={(value, name) => this.changeVal(value, "option")}
            searchable={false}
          />
        </div>
        <button>GO</button>
        <input type="text"/>
        <img />
      </div>
    );
  }
}

export default TopBar;
