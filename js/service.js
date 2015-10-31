var app = angular.module('github-api');

	app.service('githubService', function($http) {
		var id = "myCLientID";
  		var sec = "mySecretKeyThing";
  		var param = "?client_id=" + id + "&client_secret=" + sec;

  		this.getUser = function(username) {
  			return $http ({
  				method: 'GET',
  				url: 'https://api.github.com/users/' + username
  			})
  		}

	});

