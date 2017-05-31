var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/sign_in.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'UsersController as UC'
	})
	.when('/new_question', {
		templateUrl: 'partials/new_poll.html',
		controller:'UsersController as UC'
	})
	.when('/question/show/:id', {
		templateUrl: 'partials/show_poll.html',
		controller: 'UsersController as UC'
	})
	.when('/wrong_url',{
		templateUrl: 'partials/wrongUrl.html'
	})
	.otherwise({redirectTo: '/wrong_url'})
})