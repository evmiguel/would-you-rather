import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './css/Card.css'

const POLL = 'poll'
const RESULTS = 'results'

const WouldYouRatherCard = (props) => {
	return (
		<div className="card">
			<div className='card-label'>
				<h3 className='question-asks'>{props.type !== RESULTS ? `${props.author} asks:` : `Asked by ${props.author}`}</h3>
			</div>
			<div className='question-box'>
				<img src={ '../' + props.user.avatarURL} alt='Default user image icon' className='icon'/>
				<div className='question-text'>
					<h4 className='would-rather-heading'>{props.type !== RESULTS ? 'Would You Rather ...': 'Results:'}</h4>
					{props.child}
				</div>
			</div>
		</div>
	)
}

function mapStateToProps({authedUser, users}, props){
	return {
		...props,
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(WouldYouRatherCard)