import React, { Component, Fragment } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import WouldYouRatherCard from './WouldYouRatherCard'
import './css/Home.css'

const UNANSWERED = 'unanswered'
const ANSWERED = 'answered'

class Home extends Component {
	state = {
		questionList: UNANSWERED
	}

	changeQuestionList = (e) => {
		if(!e.target.textContent.toLowerCase().includes(UNANSWERED)) {
			this.setState({questionList: ANSWERED })
		} else {
			this.setState({questionList: UNANSWERED})
		}
	}

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
	        	<div className='questions-header'>
	        		<div className='unanswered-questions' onClick={this.changeQuestionList}>
		        		<h1>Unanswered Questions</h1>
		        	</div>
		        	<div className='answered-questions' onClick={this.changeQuestionList}>
		        		<h1>Answered Questions</h1>
		        	</div>
	        	</div>
	        	<div className='question-list'>
	        		<ul>
	        			{
	        				Object.keys(this.state.questionList === UNANSWERED ? unansweredQuestions : userAnswers).map(answer => (
	        					<li key={questions[answer].id}>
	        						<WouldYouRatherCard
	        							id={questions[answer].id}
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