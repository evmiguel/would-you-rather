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
		this.props.history.push('/')
	}

	componentDidUpdate() {
		if (!this.state.authedUser && this.props.users.length > 0) {
			this.setState({authedUser: this.props.users[0].id})
		}
	}

	render() {
		const { users, authedUser } = this.props
		return (
			<div className='sign-in-page'>
				<div className='sign-in-text'>
					<h1 className='sign-in-welcome'>Welcome to the Would You Rather App!</h1>
					<p className='sign-in-p'>Please sign in to continue</p>
				</div>
				<h1 className='sign-in-prompt-text'>Sign in</h1>
				<select className='sign-in-select' value={this.state.authedUser} onChange={this.changeUser}>
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