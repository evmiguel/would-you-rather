import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import WouldYouRatherCard from './WouldYouRatherCard'

class Home extends Component {
	render() {
		const { questions, users, authedUser } = this.props
		// Promp user to sign in on page
        if(!authedUser) {
        	return <Redirect to='/signin' />
        }

        let userAnswers = users[authedUser].answers
        let unansweredQuestions = Object.assign({}, questions)
        // Remove any answered questions from the unanswered object
        Object.keys(userAnswers).map(answer =>  delete unansweredQuestions[answer] )

        return (
        	<div className='home-dashboard'>
	        	<div className='answered-questions'>
	        		<h1>Answered Questions</h1>
	        		<ul>
	        			{
	        				Object.keys(userAnswers).map(answer => (
	        					<li key={questions[answer].id}>
	        						<WouldYouRatherCard
	        							author={users[questions[answer].author].name}
	        							optionOne={questions[answer].optionOne.text}
	        							optionTwo={questions[answer].optionTwo.text} />
	        					</li>
	        				))
	        			}
	        		</ul>
	        	</div>
	        	<div className='unanswered-questions'>
	        		<h1>Unanswered Questions</h1>
	        		<ul>
	        			{
	        				Object.keys(unansweredQuestions).map(answer => (
	        					<li key={questions[answer].id}>
	        						<WouldYouRatherCard
	        							author={users[questions[answer].author].name}
	        							optionOne={questions[answer].optionOne.text}
	        							optionTwo={questions[answer].optionTwo.text} />
	        					</li>
	        				))
	        			}
	        		</ul>
	        	</div>
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