import React from 'react'

const PollResult = (props) => {
	const votePercentage = props.optionVotes/props.totalVotes * 100;
	return(
		<div className={`results-option ${props.answer === true && 'result-filled'}`}>
			<h4 className={`${props.answer === true && 'result-filled-header'}`}>Would you rather {props.option}?</h4>
			{props.answer === true && <div className='choice'><h6>Your choice!</h6></div>}
			<div className='result-bar'>
				<div className='fraction-results-bar' style={{width: `${votePercentage}%`}}>
					<div><span>{votePercentage.toFixed(2)}%</span></div>
				</div>
			</div>
			<p className="vote-text">{props.optionVotes} out of {props.totalVotes} votes</p>
		</div>
	)
}

export default PollResult