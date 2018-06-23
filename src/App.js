import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from "react-router-redux";

import store from "./store";

import Home from './pages/Home'

import './App.css'

import { history } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              exact
              path="/"
              render={props => !!localStorage.getItem('warsawjs-username')
                ? <Redirect to="/user" />
                : <Home {...props} />
              }
            />

            <Route render={() => 'Not Found!'} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
