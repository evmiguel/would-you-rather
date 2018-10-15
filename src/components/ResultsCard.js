import React from 'react'
import './css/Card.css'

const ResultsCard = (props) => {
	return (
		<div className="card">
			<h3 className='question-asks'>Asked by</h3>
			<div className='question-box'>
				<p className='icon'>ICON</p>
				<div className='results-text'>
					<h4>Results</h4>
				</div>
			</div>
		</div>
	)
}

export default ResultsCard