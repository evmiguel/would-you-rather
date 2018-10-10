import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { authedUser, users } = this.props
    return (
      <div className='complete-nav'>
        <nav className='nav'>
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
            ? null
            : <nav className='nav'>
                <ul>
                  <li>
                    {`Hello, ${users[authedUser].name}`}
                  </li>
                  <li>
                    Icon
                  </li>
                  <li>
                    Logout
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

export default connect(mapStateToProps)(Nav)