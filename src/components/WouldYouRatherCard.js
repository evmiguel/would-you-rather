import React from 'react'
import { Link } from 'react-router-dom'
import './css/WouldYouRather.css'

const WouldYouRatherCard = (props) => {
	// How much to subtract the first option to make a preview string
	let toSubtract = (props.optionOne.length > 20) ? 12 : 5
	return (
		<div className="card">
			<h3 className='question-asks'>{props.author} asks:</h3>
			<div className='question-box'>
				<p className='icon'>ICON</p>
				<div className='question-text'>
					<h4>Would you rather</h4>
					<p>...{props.optionOne.substring(0, props.optionOne.length - toSubtract )}...</p>
					<button className='poll-button'><Link to={`/poll/${props.id}`}>View Poll</Link></button>
				</div>
			</div>
		</div>
	)
}

export default WouldYouRatherCard