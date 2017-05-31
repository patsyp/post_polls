app.factory('QuestionFactory', function($http){
	var factory ={}

	factory.create = function(newQuestion, callback){
		$http.post('/questions', newQuestion).then(callback)
	}
	factory.index = function(callback){
		$http.get('/questions').then(callback)
	}
	factory.destroy = function(id, callback){
		console.log('/questions/' + id)
		$http.delete('/questions/' + id).then(callback)
	}
	factory.updateOptionOne = function(question_id, user_id, callback){
		console.log(user_id)
		$http.put('/questions/' + question_id + '/votes/option1', {user: user_id}).then(callback)
	}
	factory.updateOptionTwo = function(question_id, user_id, callback){
		console.log(user_id)
		$http.put('/questions/' + question_id + '/votes/option2', {user: user_id}).then(callback)
	}
	factory.updateOptionThree = function(question_id, user_id, callback){
		console.log(user_id)
		$http.put('/questions/' + question_id + '/votes/option3', {user: user_id}).then(callback)
	}
	factory.updateOptionFour = function(question_id, user_id, callback){
		console.log(user_id)
		$http.put('/questions/' + question_id + '/votes/option4', {user: user_id}).then(callback)
	}
	factory.show = function(id, callback){
		$http.get('/questions/' + id).then(callback)
	}
	return factory
})