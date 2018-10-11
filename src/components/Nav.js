import React, { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

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