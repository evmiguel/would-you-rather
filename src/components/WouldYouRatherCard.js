import React from 'react'
import { Link } from 'react-router-dom'
import './css/Card.css'

const WouldYouRatherCard = (props) => {
	return (
		<div className="card">
			<h3 className='question-asks'>{props.author} asks:</h3>
			<div className='question-box'>
				<p className='icon'>ICON</p>
				<div className='question-text'>
					<h4>Would You Rather...</h4>
					{props.child}
				</div>
			</div>
		</div>
	)
}

export default WouldYouRatherCard