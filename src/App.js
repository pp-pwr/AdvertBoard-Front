import React, { Component } from 'react'
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import MainPage from "./components/pages/MainPage"
import Login from "./components/pages/Login"
import Registration from "./components/pages/Registration"
import NotFound from "./components/pages/NotFound"
import Profile from "./components/pages/Profile"

class App extends Component {
  render() {
    return (
      <BrowserRouter style={{height: '100%'}}>
        <div style={{height: '100%'}}>
          <Switch className="bg-dark" style={{height: '100%'}}>
            <Route path="/" component={MainPage} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Registration} exact />
            <Route path="/profile" component={Profile} exact />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
