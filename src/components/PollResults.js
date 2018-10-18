import React from 'react'
import { connect } from 'react-redux'
import PollResult from './PollResult'
import './css/Card.css'

const OPTION_ONE = 'optionOne'
const OPTION_TWO = 'optionTwo'

const PollResults = (props) => {
	return (
		<div className='results-card'>
			<PollResult option={props.optionOne}
						optionVotes={props.optionOneVotes}
						totalVotes={props.totalVotes}
						answer={props.answer === OPTION_ONE} />
			<PollResult option={props.optionTwo}
						optionVotes={props.optionTwoVotes}
						totalVotes={props.totalVotes}
						answer={props.answer === OPTION_TWO} />
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