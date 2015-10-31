var app = angular.module('github-api');

app.controller('githubController', ['$scope', 'githubService', function($scope, githubService) {

	$scope.getUserData = function() {
		$scope.getUser = githubService.getUser($scope.searchText)
		.then(function(res) {
			$scope.user = res.data;
		});
	};
}]);