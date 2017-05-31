var Users = require('../controllers/users')

var Questions = require('../controllers/questions')

module.exports = function(app){
	// Users
	app.get('/users', function(req, res) {
	  Users.index(req, res);
	})
	app.get('/users/:id', function(req, res) {
	  Users.show(req, res);
	})
	app.post('/users', function(req, res) {
	  Users.create(req, res);
	})
	app.put('/users/:id', function(req, res) {
	  Users.update(req, res);
	})
	app.post('/sessions', function(req, res){
		Users.login(req, res)
	})
	//Questions
	app.get('/questions', function(req, res){
		Questions.index(req, res)
	})
	app.post('/questions', function(req, res){
		console.log('made it to routes')
		Questions.create(req, res)
	})
	app.get('/questions/:id', function(req, res){
		Questions.show(req, res)
	})
	app.delete('/questions/:id', function(req, res){
		Questions.destroy(req, res)
	})
	app.put('/questions/:id/votes/option1', function(req, res){
		Questions.updateOptionOne(req, res)
	})
	app.put('/questions/:id/votes/option2', function(req, res){
		Questions.updateOptionTwo(req, res)
	})
	app.put('/questions/:id/votes/option3', function(req, res){
		Questions.updateOptionThree(req, res)
	})
	app.put('/questions/:id/votes/option4', function(req, res){
		Questions.updateOptionFour(req, res)
	})
}