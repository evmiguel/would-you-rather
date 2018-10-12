import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
	componentDidUpdate() {
		console.log(this.props)
	}
	render() {
		return(
			<div className='poll'>
				POLL
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