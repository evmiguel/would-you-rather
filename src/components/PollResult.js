import React from 'react'

const PollResult = (props) => {
	return(
		<div className={`results-option ${props.answer === true && 'result-filled'}`}>
			<h4>Would you rather {props.option}?</h4>
			{props.answer === true && <h6 className='choice'>Your choice!</h6>}
			<p>{props.optionVotes} of {props.totalVotes} votes</p>
		</div>
	)
}

export default PollResult