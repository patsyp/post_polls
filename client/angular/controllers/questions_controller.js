app.controller('QuestionsController', function(UserFactory, QuestionFactory, $location, $routeParams){
	console.log('QuestionsController connected!')
	var self = this
	self.questions = [];
	self.new_question_errors = []
	self.newQuestion = {}
	self.question = {}

	self.create = function(newQuestion){
		UserFactory.session(function(user){
			newQuestion.user = user._id
			QuestionFactory.create(newQuestion, function(res){
			if (res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.new_question_errors.push(error.message)
				}
			} else {
				self.index()
				self.newQuestion = {}
				$location.url('/dashboard')
			}
			})
		})
	}
	self.index = function(){
		QuestionFactory.index(function(res){
			self.questions = res.data
		})
	}
	self.show = function(){
		QuestionFactory.show($routeParams.id, function(res){
			self.question = res.data
		})
	}
	self.destroy = function(id){
		console.log(id)
		QuestionFactory.destroy(id, self.index)
	}
	self.updateOptionOne = function(question_id, user_id){
		QuestionFactory.updateOptionOne(question_id, user_id, function(){
			self.index()
			self.show()
		})
	}
	self.updateOptionTwo = function(question_id, user_id){
		QuestionFactory.updateOptionTwo(question_id, user_id, function(){
			self.index()
			self.show()
		})
	}
	self.updateOptionThree = function(question_id, user_id){
		QuestionFactory.updateOptionThree(question_id, user_id, function(){
			self.index()
			self.show()
		})
	}	
	self.updateOptionFour = function(question_id, user_id){
		QuestionFactory.updateOptionFour(question_id, user_id, function(){
			self.index()
			self.show()
		})
	}
})