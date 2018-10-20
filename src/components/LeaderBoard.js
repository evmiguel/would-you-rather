import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './css/LeaderBoard.css'

const LeaderBoard = (props) => {
	let { users, authedUser } = props
	if (!authedUser) {
		return <Redirect to={{
							pathname: '/signin',
							state: { previous: props.location }
						}} />
	}
	return (
		<div className='leaderboard'>
			<ul>
				{ users.map(user =>
					<li key={user.id} className='card leader-card'>
						<div className='user-rank-box'>
							<img src={ process.env.PUBLIC_URL + user.avatarURL} alt='Default user icon' className='icon'/>
							<div className='rank-text'>
								<h2>{user.name}</h2>
								<div className='answered question-number'>
									<h3>Answered Questions: </h3>
									<h3>{Object.keys(user.answers).length}</h3>
								</div>
								<div className='question-number'>
									<h3>Created Questions: </h3>
									<h3>{user.questions.length}</h3>
								</div>
							</div>
							<div className='score'>
								<h3>Score</h3>
								<div className='score-number'>
									<h4>{user.score}</h4>
								</div>
							</div>
						</div>
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