import { saveQuestionAnswerBackend } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
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

		return saveQuestionAnswerBackend(answer)
			.catch((e) => {
				console.warn("Error in save question answer: ", e)
				//dispatch(saveQuestionAnswerBackend(info))
				alert("There was an error saving the answer. Try again.")
			})
	}
}
