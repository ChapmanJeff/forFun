var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/js/login.html',
		})
		.when('/home', {
			templateUrl: '/js/templates/home/home.html',
			controller: 'homeCtrl'
		})
		.otherwise('/');
});