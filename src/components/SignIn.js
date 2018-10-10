import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/SignIn.css'

class SignIn extends Component {
	render() {
		const { users } = this.props
		return (
			<div className='sign-in-page'>
				<div className='sign-in-text'>
					<h1 className='sign-in-welcome'>Welcome to the Would You Rather App!</h1>
					<p className='sign-in-p'>Please sign in to continue</p>
				</div>
				<h1 className='sign-in-prompt-text'>Sign in</h1>
				<select className='sign-in-select'>
					{
						users.map(user => ((
							<option key={user.id} value={user.id}>{user.name}</option>
						)))
					}
				</select>
				<button className='sign-in-btn'>Sign In</button>
			</div>
		)
	}
}

function mapStateToProps({users}) {
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(SignIn)