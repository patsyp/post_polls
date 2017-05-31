var mongoose = require('mongoose')

var QuestionSchema = new mongoose.Schema({
	user: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
	question: {
		type: String, 
		required: [true, 'Question field cannot be blank.'],
		minlength: [8, 'Question must be at least 8 characters long.']},
	optionOne: {
		name: {type: String,
		required: [true, 'Option 1 field is blank.'],
		minlength: [3, 'Option 1 must be at least 3 characters long.']},
		votes: {
			count: {
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
		}
	},
	optionTwo: {
		name: {type: String,
		required: [true, 'Option 2 field is blank.'],
		minlength: [3, 'Option 2 must be at least 3 characters long.']},
		votes: {
			count: {
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
		}
	},
	optionThree: {
		name: {type: String,
		required: [true, 'Option 3 field is blank.'],
		minlength: [3, 'Option 3 must be at least 3 characters long.']},
		votes: {
			count: {
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
		}
	},
	optionFour: {
		name: {type: String,
		required: [true, 'Option 4 field is blank.'],
		minlength: [3, 'Option 4 must be at least 3 characters long.']},
		votes: {
			count: {
			type: Number,
			default: 0
		},
		users: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		}]
		}
	},
}, {timestamps: true})


mongoose.model('Question', QuestionSchema)