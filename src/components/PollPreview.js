import React from 'react'
import { Link } from 'react-router-dom'

const PollPreview = (props) => {
	// How much to subtract the first option to make a preview string
	let toSubtract = (props.text.length > 20) ? 12 : 5
	return (
		<div>
			<p>...{props.text.substring(0, props.text.length - toSubtract )}...</p>
			<button className='poll-button'><Link to={`/poll/${props.id}`}>View Poll</Link></button>
		</div>
	)
}

export default PollPreview