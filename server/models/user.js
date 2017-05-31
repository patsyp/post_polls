var mongoose = require('mongoose')
var Question = mongoose.model('Question')


var UserSchema = new mongoose.Schema({
	name: {type: String, required:[true, 'You must provide a name.']},
	questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
}, {timestamps: true})

UserSchema.pre('remove', function(callback){
	Question.remove({user: self._id}, callback)
})

mongoose.model('User', UserSchema)