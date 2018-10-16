import React from 'react'
import { connect } from 'react-redux'

const OPTION_ONE = 'optionOne'
const OPTION_TWO = 'optionTwo'

const PollResults = (props) => {
	return (
		<div>
			<h4>Would you rather {props.optionOne}?</h4>
			{props.answer === OPTION_ONE && <h6>Your choice!</h6>}
			<p>{props.optionOneVotes} of {props.totalVotes} votes</p>
			<h4>Would you rather {props.optionTwo}?</h4>
			{props.answer === OPTION_TWO && <h6>Your choice!</h6>}
			<p>{props.optionTwoVotes} of {props.totalVotes} votes</p>
		</div>
	)
}

function mapStateToProps({authedUser, questions}, {id, optionOne, optionTwo}) {
	return {
		id,
		optionOne,
		optionTwo,
		answer: questions[id].optionOne.votes.includes(authedUser) ? OPTION_ONE : OPTION_TWO,
		optionOneVotes: questions[id].optionOne.votes.length,
		optionTwoVotes: questions[id].optionTwo.votes.length,
		totalVotes: questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length

	}
}

export default connect(mapStateToProps)(PollResults)