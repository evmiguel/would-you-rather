import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import WouldYouRatherCard from './WouldYouRatherCard'
import PollChoices from './PollChoices'
import PollResults from './PollResults'

const POLL = 'poll'
const RESULTS = 'results'

class Poll extends Component {
	render() {
		const { question, author, authedUser, type } = this.props
		if (!authedUser) { return <Redirect to={{pathname: '/signin',
												 state: { previous: this.props.location }}} /> }
		if (!question) { return <Redirect to='/error' />}
		return(
			<div className='poll'>
				<WouldYouRatherCard
					author={author && author.name}
					type={type === RESULTS ? RESULTS : POLL}
					child={
						(question && this.props.type !== RESULTS) ?
						<PollChoices
							id={question.id}
							optionOne={question.optionOne.text}
							optionTwo={question.optionTwo.text}
						/> :
						<PollResults
							id={question.id}
							optionOne={question.optionOne.text}
							optionTwo={question.optionTwo.text}
						/>
					}
				/>
			</div>
		)
	}
}

function mapStateToProps({questions, users, authedUser}, {match, location}){
	let id = match.params.id
	let question = questions[id] !== undefined ? questions[id] : false
	let author = question ? users[question.author] : null
	let type
	if (authedUser) {
		if (location.state !== undefined) {
			type = location.state.type.includes(RESULTS) ? RESULTS : POLL
		} else {
			type = Object.keys(users[authedUser].answers).includes(id) ? RESULTS : POLL
		}
	}

	return {
		question,
		id,
		author,
		authedUser,
		type
	}
}
export default connect(mapStateToProps)(Poll)