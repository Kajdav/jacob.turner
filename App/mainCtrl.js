var app = angular.module('app')

app.controller('mainCtrl', function($scope, dataService) {
	$scope.postContent = function() {
		var content = {};
		content.title = $scope.postTitle;
		content.body = $scope.postBody;
		dataService.postBlog(content)
			.then(function(){
				alert('Post Successful!');
				$scope.postTitle = '';
				$scope.postBody = '';
			});
	}
	dataService.retrieveBlog()
		.then(function(data){
			for (var i = 0; i < data.data.results.length; i++) {
				data.data.results[i].createdAt = new Date(data.data.results[i].createdAt)
			}
			$scope.blogData = data.data.results;
			console.log($scope.blogData);
		});
		$scope.reverse = true;
})