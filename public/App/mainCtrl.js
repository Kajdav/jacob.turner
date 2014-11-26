var app = angular.module('app')

app.controller('mainCtrl', function($scope, $location, $anchorScroll, $q, dataService) {
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
			});
	}

	populatePosts();

	$scope.deleteButton = function(objID) {
		dataService.deletePost(objID)
			.success(function(){
				alert('Post Deleted!')
				populatePosts();
			}).error(function(){
				alert('There was an Error!')
			})
		}
		$scope.scrollTo = function(hash) {
			$location.hash(hash);
			$anchorScroll();
		}
		$scope.go = function(path) {
			$location.path(path);
//This is semi-working. The routing works like a charm.
//The anchor only works after clicking on the button a second time.
//It takes a second click because the .scrollTo('content') is happening
//before the path/ng-view has loaded.  So, it's taking the page view
//down to the anchor, then loading the ng-view.  That ought to be clear
//enough.  Will take some combination of a promise and/or animations
//to make it work smoothly.
		}
})