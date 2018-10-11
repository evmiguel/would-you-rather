import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SignIn from './SignIn'
import Nav from './Nav'
import Home from './Home'
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
          <Route path='/signin' component={SignIn} />
          <Route path='/' exact component={Home} />
        </div>
      </Router>
    );
  }
}
function mapStateToProps({authedUser}) {
  return {
    authedUser: authedUser
  }
}
export default connect(mapStateToProps)(App)
