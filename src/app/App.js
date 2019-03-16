import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Alert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import './App.css'

import MainPage from "../components/pages/MainPage"
import Login from "../components/pages/Login"
import Registration from "../components/pages/Registration"
import NotFound from "../common/NotFound"
import Profile from "../components/pages/Profile"

import { getCurrentUser } from "../utils/APIUtils"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      user: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          authenticated: true,
          user: response,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }

}

export default App;
