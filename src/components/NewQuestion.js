import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
	render () {
		const { authedUser } = this.props
		if (!authedUser) { return <Redirect to='/signin' /> }
		return (

			<h1>New Question</h1>
		)
	}
}


function mapStateToProps({authedUser}) {
	return {
		authedUser
	}
}
export default connect(mapStateToProps)(NewQuestion)