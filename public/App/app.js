var app = angular.module('app', ['textAngular', 'ngSanitize', 'ngRoute']);

app.config(function($httpProvider, $routeProvider, $locationProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
	$routeProvider
		.when('/', {})
		.when('/new-post', {
			templateUrl : 'app/templates/create-post.html',
			controller : 'mainCtrl'
		})
		.when('/blog', {
			templateUrl : 'app/templates/view-posts.html',
			controller : 'mainCtrl'
		})
		.when('/portfolio', {
			templateUrl : 'app/templates/portfolio.html',
			controller : 'mainCtrl'
		})
		.when('/jacob', {
			templateUrl : 'app/templates/about-me.html',
			controller : 'mainCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

	$locationProvider.html5Mode(true);
});