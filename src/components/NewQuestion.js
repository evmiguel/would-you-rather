import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handleSaveQuestion } from '../actions/shared'
import './css/Card.css'

class NewQuestion extends Component {
	state = {
		optionOneText: '',
		optionTwoText: ''
	}

	handleInputChange = (e, option) => {
		this.setState({ [option]: e.target.value })
	}

	submitQuestion = (e) => {
		e.preventDefault()
		const { dispatch, authedUser, history } = this.props
		dispatch(handleSaveQuestion(Object.assign({}, this.state, { author: authedUser })))
		history.push('/')
	}

	render () {
		const { authedUser } = this.props
		if (!authedUser) { return <Redirect to='/signin' /> }
		return (
			<div className="card">
				<h2 className='create-title'>Create New Question</h2>
				<h3 className='create-subtitle'>Complete the question:</h3>
				<h4>Would you rather ...</h4>
				<form onSubmit={this.submitQuestion} >
					<input type='text'
						placeholder='Enter Option One Text Here'
						value={this.state.optionOneText}
						onChange={(e) => this.handleInputChange(e, 'optionOneText')} />
					<p className='or'><span>OR</span></p>
					<input type='text'
							placeholder='Enter Option Two Text Here'
							value={this.state.optionTwoText}
							onChange={(e) => this.handleInputChange(e, 'optionTwoText')} />
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}


function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}
export default withRouter(connect(mapStateToProps)(NewQuestion))