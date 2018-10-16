import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion
} from './_DATA'

export function getInitialData () {
	return Promise.all([
			_getUsers(),
			_getQuestions()
		]).then(([users, questions]) => ({
		users,
		questions,
	}))
}

export function saveQuestionAnswerBackend (answer) {
	return _saveQuestionAnswer(answer)
}

export function saveQuestionBackend (question) {
	return _saveQuestion(question)
}