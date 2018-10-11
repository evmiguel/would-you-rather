import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
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
        					<li key={questions[answer].id}>
        						<h3>{users[questions[answer].author].name} asks:</h3>
        						<div className='question-box'>
        							<p>ICON</p>
        							<div className='question-text'>
        								<h4>Would you rather</h4>
        								<p>...{questions[answer].optionOne.text.substring(0, questions[answer].optionOne.text.length-5)}...</p>
        							</div>
        						</div>
        					</li>
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
export default withRouter(connect(mapStateToProps)(Home))