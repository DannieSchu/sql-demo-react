import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import Detail from './components/Detail.js';
import Home from './components/Home.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch >
          <Route exact path="/" component={Home} />
          <Route path="/beers/:beers" component={Detail} />
        </Switch>
      </Router>    
      )
  }
}
