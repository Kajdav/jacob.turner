var app = angular.module('app')

app.controller('mainCtrl', function($scope, dataService) {
	$scope.postContent = function() {
		var content = {};
		content.title = $scope.postTitle;
		content.body = $scope.postBody;
		dataService.postBlog(content)
			.success(function(){
				alert('Post Successful!');
				$scope.postTitle = '';
				$scope.postBody = '';
			}).error(function(){
				alert('There was an Error!');
			})
	}
	var populatePosts = function() {
		dataService.retrieveBlog()
			.then(function(data){
				for (var i = 0; i < data.data.results.length; i++) {
					data.data.results[i].createdAt = new Date(data.data.results[i].createdAt)
				}
				$scope.blogData = data.data.results;
				console.log($scope.blogData);
			});
	}
	populatePosts();

	$scope.deleteButton = function(objID) {
		console.log(objID);
		dataService.deletePost(objID)
			.success(function(){
				alert('Post Deleted!')
				populatePosts();
			}).error(function(){
				alert('There was an Error!')
			})
		}
})