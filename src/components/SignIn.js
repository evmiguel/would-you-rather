import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
	render() {
		const { users } = this.props
		return (
			<div className='sign-in-page'>
				<div className='sign-in-text'>
					<h1 className='sign-in-welcome'>Welcome to the Would You Rather App!</h1>
					<p>Please sign in to continue</p>
				</div>
				<select className='sign-in-select'>
					{
						users.map(user => ((
							<option key={user.id} value={user.id}>{user.name}</option>
						)))
					}
				</select>
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