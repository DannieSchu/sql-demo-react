import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import Detail from './components/Detail.js';
import Home from './components/Home.js';
import CreateForm from './components/CreateForm.js';
import Nav from './components/Nav';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Header />
        <Switch >
          <Route path="/beers/:beer?" component={Detail} />
          <Route path="/create" component={
        CreateForm} />
          }
          <Route exact path="/" component={Home} />

        </Switch>
      </Router>    
      )
  }
}
