import React, { Component } from 'react';
import { Route } from 'react-router';
//import requireAuth from './components/ProtectedRoute';

import './App.css'
/*import FrontPage from './components/FrontPage';
import SignIn from './components/SignIn/SignIn';
import Food from './components/Foods/Food';*/

import Order from './components/Order/Order';
import LoginForm from './components/Auth/Login'
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <>
        <Route exact path='/' component={Order} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
      {/* 
        <Route exact path='/' component={FrontPage} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/foods' component={Food} />
      */}
      </>
    );
  }
}
