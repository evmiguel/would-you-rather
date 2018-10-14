import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

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
		console.log(this.props.questions[this.props.id])
	}

	handleChange = (e, option) => {
		this.setState({
			chosenOption: e.target.value,
			option: option
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const {questions, id, authedUser, dispatch} = this.props
		dispatch(
			handleSaveQuestionAnswer({
				qid: id,
				authedUser: authedUser,
				answer: this.state.option
			}))
	}

	render() {
		const { optionOne, optionTwo } = this.props

		return (
			<form onSubmit={this.handleSubmit}>
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
				<input type='submit' value='Submit' />
			</form>
		)
	}
}


function mapStateToProps({ questions, authedUser }, {props}){
	return {
		...props,
		questions,
		authedUser
	}
}

export default connect(mapStateToProps)(PollChoices)