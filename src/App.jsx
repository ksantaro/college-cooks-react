import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Homepage from './Homepage';
import MealLayout from './MealLayout';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore, compose } from 'redux';
import CounterReducers from './reducers';
import { autoRehydrate, persistStore } from 'redux-persist';
import localForage from 'localforage';

const middlewares = [];

//if (__DEV__) {
//  middlewares.push(createLogger());
//}

let store = createStore(
  CounterReducers,
  undefined,
  compose(applyMiddleware (...middlewares), autoRehydrate()),
);

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isReady: false,
    }
  }
  
  componentDidMount() {
    persistStore(
      store, {
        storeage: localForage,
      },
      () => {
        this.setState({ isReady: true })
      }
    )
  }
  
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/browse/:id' component={MealLayout} />
            <Route path='/browse/' component={MealLayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
