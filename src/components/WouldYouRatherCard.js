import React from 'react'
import { Link } from 'react-router-dom'
import './css/Card.css'

const POLL = 'poll'
const RESULTS = 'results'

const WouldYouRatherCard = (props) => {
	return (
		<div className="card">
			<h3 className='question-asks'>{props.type !== RESULTS ? `${props.author} asks:` : `Asked by ${props.author}`}</h3>
			<div className='question-box'>
				<p className='icon'>ICON</p>
				<div className='question-text'>
					{props.type !== RESULTS ? <h4>Would You Rather...</h4> : <h1>Results</h1>}
					{props.child}
				</div>
			</div>
		</div>
	)
}

export default WouldYouRatherCard