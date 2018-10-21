import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import SignIn from './SignIn'
import Nav from './Nav'
import Home from './Home'
import Poll from './Poll'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import ErrorPage from './ErrorPage'
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
          <main>
            <Route path='/signin' component={SignIn} />
            <Route path='/' exact component={Home} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/questions/:id' component={Poll} />
            <Route path='/error' component={ErrorPage} />
          </main>
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
