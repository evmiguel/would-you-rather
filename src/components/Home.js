import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
	render() {
		const { questions, users, authedUser } = this.props
		// Promp user to sign in on page
        if(!authedUser) {
        	return <Redirect to='/signin' />
        }

        let userAnswers = users[authedUser].answers
        return (
        	<div>
        		<h1>Answered Questions</h1>
        		<ul>
        			{
        				Object.keys(userAnswers).map(answer => (
        					<li key={questions[answer].id}>{questions[answer].id}</li>
        				))
        			}
        		</ul>
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