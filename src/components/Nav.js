import React, { Component, createRef } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.outerDivNode = createRef()
  }

  state = {
    menuNavOpen: false
  }

  hamburgerClick = () => {
    this.setState({menuNavOpen : true})
  }

  componentDidMount() {
    document.addEventListener('click', this.outerDivClick, false)
  }

  outerDivClick = (e) => {
    if (!this.outerDivNode.current.contains(e.target)){
      this.setState({menuNavOpen: false})
    }
  }

  logout = () => {
    this.props.dispatch(setAuthedUser(null))
    // When user is logged out, return to the signin page
    this.props.history.push('/signin')
  }

  render() {
    const { authedUser, users } = this.props
    return (
      <div className='complete-nav' ref={this.outerDivNode}>
        <a className='burger-nav' onClick={this.hamburgerClick}>&#9776;</a>
        <nav className={`nav menu-nav ${this.state.menuNavOpen && 'open'}`}>
          <ul>
            <li>
              <NavLink to='/' exact >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/new'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leader'>
                Leader Board
              </NavLink>
            </li>
          </ul>
        </nav>
        {
          !authedUser
              // Small trick to keep hamburger in place, while a user has not been logged in.
            ? <nav className='nav'>
                <ul>
                  <li className='placeholder-li'>
                    Place
                  </li>
                  <li className='placeholder-li'>
                    Holder
                  </li>
                  <li className='placeholder-li'>
                    Placeholder
                  </li>
                </ul>
              </nav>

            : <nav className='nav'>
                <ul>
                  <li>
                    {`Hello, ${users[authedUser].name}`}
                  </li>
                  <li>
                    Icon
                  </li>
                  <li>
                    <a onClick={this.logout}>Logout</a>
                  </li>
                </ul>
              </nav>

        }
      </div>
    )
  }
}

function mapStateToProps({authedUser, users}){
  return {
    authedUser: authedUser,
    users: users
  }
}

export default withRouter(connect(mapStateToProps)(Nav))