import React from 'react'

const WouldYouRatherCard = (props) => {
	return (
		<div class="card">
			<h3>{props.author} asks:</h3>
			<div className='question-box'>
				<p>ICON</p>
				<div className='question-text'>
					<h4>Would you rather</h4>
					<p>...{props.optionOne.substring(0, props.optionOne.length-5)}...</p>
				</div>
			</div>
		</div>
	)
}

export default WouldYouRatherCard