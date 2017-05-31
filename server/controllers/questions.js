var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = {
	index: function (req ,res){
		Question.find({}).populate({
			path: 'user',
			model: 'User'
		}).sort('-createdAt').exec(function(err, questions){
			if (err){
				return res.json(err)
			}
			return res.json(questions)
		})
	},
	create: function(req, res){
		Question.create(req.body, function(err, question){
			if (err){
				return res.json(err)
			}
			User.findByIdAndUpdate(req.body.user, {$push: {questions:question._id}}, function(err, user){
				if (err){
					return res.json(err)
				}
				return res.json(question)
			})
		})
	},
	show: function(req, res){
			Question.findById(req.params.id).populate({
			path: 'user',
			model: 'User'
		}).exec(function(err, questions){
			if (err){
				return res.json(err)
			}
			return res.json(questions)
		})
	},
	updateOptionOne: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			question.optionOne.votes.count++
			question.optionOne.votes.users.push(req.body.user)	
			question.save(function(err, message){
				if(err){
					return res.json
				}
				return res.json(question)
			})
		})
	},
	updateOptionTwo: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			question.optionTwo.votes.count++
			question.optionTwo.votes.users.push(req.body.user)	
			question.save(function(err, message){
				if(err){
					return res.json
				}
				return res.json(question)
			})
		})
	},
	updateOptionThree: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			question.optionThree.votes.count++
			question.optionThree.votes.users.push(req.body.user)	
			question.save(function(err, message){
				if(err){
					return res.json
				}
				return res.json(question)
			})
		})
	},
	updateOptionFour: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if(err){
				return res.json(err)
			}
			question.optionFour.votes.count++
			question.optionFour.votes.users.push(req.body.user)	
			question.save(function(err, message){
				if(err){
					return res.json
				}
				return res.json(question)
			})
		})
	},
	destroy: function(req, res){
		Question.findById(req.params.id, function(err, question){
			if (err){
				return res.json(err)
			}
			question.remove(function(err, question){
				if (err){
					return res.json(err)
				}
				return res.json(question)
			})
		})
	},

}