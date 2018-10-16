import { getInitialData, saveQuestionAnswerBackend, saveQuestionBackend } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'


export function handleInitialData () {
	return (dispatch) => {
		return getInitialData().then(({users, questions}) => {
			dispatch(receiveUsers(users))
			dispatch(receiveQuestions(questions))
		})
	}
}

function saveQuestionAnswer({authedUser, qid, answer}) {
	return {
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer
	}
}

function saveQuestion(question){
	return {
		type: SAVE_QUESTION,
		question
	}
}

export function handleSaveQuestionAnswer (answer) {
	return (dispatch) => {
		return saveQuestionAnswerBackend(answer).then(dispatch(saveQuestionAnswer(answer)))
	}
}

export function handleSaveQuestion(question) {
	return (dispatch) => {
		return saveQuestionBackend(question).then(question => { dispatch(saveQuestion(question))})
	}
}