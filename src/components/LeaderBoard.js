import React from 'react'
import { connect } from 'react-redux'

const LeaderBoard = (props) => {
	let { users } = props
	return (
		<div className='leaderboard'>
			<ul>
				{ users.map(user =>
					<li key={user.id}>
						<h2>{user.name}</h2>
						<h3>Answered Questions: {Object.keys(user.answers).length}</h3>
						<h3>Questions: {user.questions.length}</h3>
						<h3>Score: {Object.keys(user.answers).length + user.questions.length}</h3>
					</li>
					)
				}
			</ul>
		</div>
	)
}

function mapStateToProps({users}){
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(LeaderBoard)