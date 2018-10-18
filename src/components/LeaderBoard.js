import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const LeaderBoard = (props) => {
	let { users, authedUser } = props
	if (!authedUser) { return <Redirect to='/signin' /> }
	return (
		<div className='leaderboard'>
			<ul>
				{ users.map(user =>
					<li key={user.id}>
						<h2>{user.name}</h2>
						<h3>Answered Questions: {Object.keys(user.answers).length}</h3>
						<h3>Questions: {user.questions.length}</h3>
						<h3>Score: {user.score}</h3>
					</li>
					)
				}
			</ul>
		</div>
	)
}

function mapStateToProps({users, authedUser}){
	// Make a new user object so that users doesn't get overwritten.
	let userObj = Object.assign({}, users)
	Object.values(users).map(user => userObj[user.id]['score'] = Object.keys(user.answers).length + user.questions.length)
	return {
		// Create an array of users, sorted by score
		users: Object.values(userObj).sort((a,b) => {
			if (a.score < b.score) {
				return 1
			} else if (a.score > b.score) {
				return -1
			} else {
				return 0
			}
		}),
		authedUser
	}
}

export default connect(mapStateToProps)(LeaderBoard)