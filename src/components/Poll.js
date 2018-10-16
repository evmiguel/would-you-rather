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
		if (!authedUser) { return <Redirect to='/signin' /> }
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

function mapStateToProps({questions, users, authedUser}, {match}){
	let id = match.params.id
	let question = questions[id]
	let author = question ? users[question.author] : null
	let type = match.path.includes(RESULTS) ? RESULTS : POLL
	return {
		question,
		id,
		author,
		authedUser,
		type
	}
}
export default connect(mapStateToProps)(Poll)