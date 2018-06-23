import React, { Component } from 'react';
import { Provider } from "react-redux";

import store from "./store";

import Home from './pages/Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;
