var app = angular.module('app');

app.controller('mainCtrl', function ($scope, mainService, $q) {
	$scope.test = 'hello!'
	$scope.change;

	$scope.makeChange = function() {
		console.log($scope.change)
		$scope.change = "Working"
		console.log($scope.change)
	}

	$scope.unChange = function () {
		$scope.change = null;
	}
});