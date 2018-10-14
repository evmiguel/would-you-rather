import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import WouldYouRatherCard from './WouldYouRatherCard'
import PollChoices from './PollChoices'

class Poll extends Component {
	render() {
		const { question, author, authedUser } = this.props
		console.log(question)
		if (!authedUser) { return <Redirect to='/signin' /> }
		return(
			<div className='poll'>
				<WouldYouRatherCard
					author={author && author.name}
					child={
						question &&
						<PollChoices
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
	return {
		question,
		id,
		author,
		authedUser
	}
}
export default connect(mapStateToProps)(Poll)