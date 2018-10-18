import React from 'react'
import { Link } from 'react-router-dom'
import './css/Card.css'
import img from '../img/user.png'

const POLL = 'poll'
const RESULTS = 'results'

const WouldYouRatherCard = (props) => {
	return (
		<div className="card">
			<div className='card-label'>
				<h3 className='question-asks'>{props.type !== RESULTS ? `${props.author} asks:` : `Asked by ${props.author}`}</h3>
			</div>
			<div className='question-box'>
				<img src={img} className='icon'/>
				<div className='question-text'>
					{props.type !== RESULTS ? <h4 className='would-rather-heading'>Would You Rather ...</h4> : <h1>Results</h1>}
					{props.child}
				</div>
			</div>
		</div>
	)
}

export default WouldYouRatherCard