import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import WouldYouRatherCard from './WouldYouRatherCard'

class Poll extends Component {
	render() {
		const { question, author } = this.props
		return(
			<div className='poll'>
				<WouldYouRatherCard
					author={author && author.name}
					child={
						<Fragment>
							<h4>{question && question.optionOne.text}</h4>
							<h4>{question && question.optionTwo.text}</h4>
						</Fragment>
					}
				/>
			</div>
		)
	}
}

function mapStateToProps({questions, users}, {match}){
	let id = match.params.id
	let question = questions[id]
	let author = question ? users[question.author] : null
	return {
		question,
		id,
		author
	}
}
export default connect(mapStateToProps)(Poll)