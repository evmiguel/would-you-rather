import React, { Component } from 'react'

class PollChoices extends Component {
	state = {
		chosenOption: ''
	}

	handleChange = (e) => {
		this.setState({ chosenOption: e.target.value })
	}

	render() {
		const { optionOne, optionTwo } = this.props

		return (
			<form>
				<ul>
					<li>
						<label>
							<input
								type='radio'
								name='optionOne'
								value={optionOne}
								checked={this.state.chosenOption === optionOne}
								onChange={this.handleChange}
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
								onChange={this.handleChange}
						/>
							{optionTwo}
						</label>
					</li>
				</ul>
			</form>
		)
	}
}

export default PollChoices