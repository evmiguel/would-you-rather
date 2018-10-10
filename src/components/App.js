import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SignIn from './SignIn'
import Nav from './Nav'
import './css/App.css'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <SignIn />
        </div>
      </Router>
    );
  }
}

export default connect()(App)
