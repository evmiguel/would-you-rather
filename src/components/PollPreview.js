import React from 'react'
import { Link } from 'react-router-dom'
import './css/Poll.css'

const RESULTS = 'results'
const POLL = 'poll'
const UNANSWERED = 'unanswered'

const PollPreview = (props) => {
	// How much to subtract the first option to make a preview string
	let toSubtract = (props.text.length > 20) ? 12 : 5
	let questionType = props.type
	return (
		<div>
			<p>...{props.text.substring(0, props.text.length - toSubtract )}...</p>
			<Link to={{ pathname: `/questions/${props.id}`, state: { type: questionType === UNANSWERED ? POLL : RESULTS}}}><button className='poll-button'>View Poll</button></Link>
		</div>
	)
}

export default PollPreview