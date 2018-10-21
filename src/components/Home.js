import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import WouldYouRatherCard from './WouldYouRatherCard'
import PollPreview from './PollPreview'
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
		const { questions, users, authedUser, answered, unanswered } = this.props
		// Promp user to sign in on page
        if(!authedUser) {
        	return <Redirect to='/signin' />
        }

        return (
        	<div className='home-dashboard'>
	        	<div className='questions-header'>
	        		<div className='unanswered-questions' aria-selected={this.state.questionList === UNANSWERED ? 'true' : 'false'} onClick={this.changeQuestionList}>
		        		<h1>Unanswered Questions</h1>
		        	</div>
		        	<div className='answered-questions' aria-selected={this.state.questionList === ANSWERED ? 'true' : 'false'} onClick={this.changeQuestionList}>
		        		<h1>Answered Questions</h1>
		        	</div>
	        	</div>
	        	<div className='question-list'>
	        		<ul>
	        			{
	        				(this.state.questionList === UNANSWERED ? unanswered : answered).map(answer => (
	        					<li key={questions[answer].id}>
	        						<WouldYouRatherCard
	        							author={users[questions[answer].author].name}
	        							avatarURL={users[questions[answer].author].avatarURL}
	        							child={<PollPreview
	        										id={questions[answer].id}
	        										text={questions[answer].optionOne.text}
	        										type={this.state.questionList}
	        									/>}
									/>
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
	let answered, unanswered

	const sort = (a,b) => {
		return new Date(questions[b].timestamp).getTime() - new Date(questions[a].timestamp).getTime()
	}

	if(authedUser) {
		// Convert answer objects into lists for sorting
	    answered = Object.keys(users[authedUser].answers).sort(sort)
	    unanswered = Object.keys(Object.assign({}, questions)).sort(sort)
	    // Remove any answered questions from the unanswered object
	    answered.map(answer =>  unanswered = unanswered.filter(unanswered => answer !== unanswered))
	}



	return {
		authedUser,
		users,
		questions,
		answered,
		unanswered
	}
}
export default withRouter(connect(mapStateToProps)(Home))