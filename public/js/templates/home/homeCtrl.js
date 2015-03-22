var app = angular.module('app');

app.controller('homeCtrl', function($timeout, $scope) {

	$scope.textRun = function () {
		$scope.text = true;
	}

	$timeout(function() {
	        $scope.textRun();
	}, 4000);

})