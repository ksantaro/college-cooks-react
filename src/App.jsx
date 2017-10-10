import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Homepage from './Homepage';
import MealLayout from './MealLayout';
import { BrowserRouter, Switch } from 'react-router-dom';

export default class Main extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/browse/:id' component={MealLayout} />
          <Route path='/browse/' component={MealLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
