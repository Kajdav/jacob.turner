var app = angular.module('app', ['textAngular', 'ngSanitize', 'ngRoute']);

app.config(function($httpProvider, $routeProvider, $locationProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
	$routeProvider
		.when('/', {})
		.when('/new-post', {
			templateUrl : 'templates/create-post.html',
			controller : 'mainCtrl'
		})
		.when('/blog', {
			templateUrl : 'templates/view-posts.html',
			controller : 'mainCtrl'
		})
		.when('/portfolio', {
			templateUrl : 'templates/portfolio.html',
			controller : 'mainCtrl'
		})
		.when('/jacob', {
			templateUrl : 'templates/about-me.html',
			controller : 'mainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

	$locationProvider.html5Mode(true);
});