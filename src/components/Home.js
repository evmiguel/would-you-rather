import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return(
			<div>
				HOME
			</div>
		)
	}
}

function mapStateToProps({authedUser, users, questions}) {
	return {
		authedUser,
		users,
		questions
	}
}
export default connect(mapStateToProps)(Home)