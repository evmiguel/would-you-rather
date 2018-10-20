import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/SignIn.css'
import { setAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
	state = {
		authedUser: ''
	}

	changeUser = (event) => {
		this.setState({authedUser: event.target.value})
	}

	authorizeUser = () => {
		this.props.dispatch(setAuthedUser(this.state.authedUser))

		// if the user typed in a different route, redirect them after they've signed in
		let prevRouterPath = (this.props.location.state !== undefined) ? this.props.location.state.previous.pathname : null
		prevRouterPath ? this.props.history.push(prevRouterPath) : this.props.history.push('/')
	}

	render() {
		const { users } = this.props
		return (
			<div className='sign-in-page'>
				<div className='sign-in-text'>
					<h1 className='sign-in-welcome'>Welcome to the Would You Rather App!</h1>
					<p className='sign-in-p'>Please sign in to continue</p>
				</div>
				<h1 className='sign-in-prompt-text'>Sign in</h1>
				<select className='sign-in-select' value={this.state.authedUser} onChange={this.changeUser}>
					<option default disabled defaultValue value="">Select User</option>
					{
						users.map(user => ((
							<option key={user.id} value={user.id}>{user.name}</option>
						)))
					}
				</select>
				<button className='sign-in-btn' onClick={this.authorizeUser}>Sign In</button>
			</div>
		)
	}
}

function mapStateToProps({authedUser, users}) {
	return {
		users: Object.values(users),
		authedUser: authedUser
	}
}

export default withRouter(connect(mapStateToProps)(SignIn))