var app = angular.module('app');

app.service('dataService', function($http, $q) {
	this.postBlog = function(content) {
		return $http({
			method: 'POST',
			data: content,
			url: 'https://api.parse.com/1/classes/blog'
		})
	}
	this.retrieveBlog = function() {
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/blog'
		})
	}

})