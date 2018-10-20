import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/shared'
import './css/Poll.css'

class PollChoices extends Component {
	state = {
		chosenOption: '',
		option: ''
	}

	componentDidMount() {
		this.setState({
			chosenOption: this.props.optionOne,
			option: 'optionOne'
		})
	}

	handleChange = (e, option) => {
		this.setState({
			chosenOption: e.target.value,
			option: option
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {id, authedUser, dispatch, history} = this.props
		dispatch(
			handleSaveQuestionAnswer({
				qid: id,
				authedUser: authedUser,
				answer: this.state.option
			}))
		history.push(`/results/${id}`)
	}

	render() {
		const { optionOne, optionTwo } = this.props
		return (
			<form className='poll-form' onSubmit={this.handleSubmit}>
				<ul>
					<li>
						<label>
							<input
								type='radio'
								name='optionOne'
								value={optionOne}
								checked={this.state.chosenOption === optionOne}
								onChange={(e) => this.handleChange(e, 'optionOne')}
							 />
							{optionOne}
						</label>
					</li>
					<li>
						<label>
							<input
								type='radio'
								name='optionTwo'
								value={optionTwo}
								checked={this.state.chosenOption === optionTwo}
								onChange={(e) => this.handleChange(e, 'optionTwo')}
						/>
							{optionTwo}
						</label>
					</li>
				</ul>
				<input className='submit-btn' type='submit' value='Submit' />
			</form>
		)
	}
}


function mapStateToProps({ questions, authedUser, users }, {props}){
	return {
		...props,
		questions,
		authedUser,
		users
	}
}

export default withRouter(connect(mapStateToProps)(PollChoices))