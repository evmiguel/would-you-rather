import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'


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

export function handleSaveQuestionAnswer (answer) {
	return (dispatch) => {
		dispatch(saveQuestionAnswer(answer))
	}
}