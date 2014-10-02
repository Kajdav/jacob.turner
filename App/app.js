var app = angular.module('app', ['textAngular', 'ngSanitize', 'ngRoute']);

app.config(function($httpProvider, $routeProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
	$routeProvider
		// .when('/', {
		// 	templateUrl : 'index.html',
		// 	controller : 'mainCtrl'
		// })
		.when('/new-post', {
			templateUrl : 'pages/create-post.html',
			controller : 'mainCtrl'
		})
		.when('/view-blog', {
			templateUrl : 'pages/view-posts.html',
			controller : 'mainCtrl'
		})
		.when('/portfolio', {
			templateUrl : 'pages/portfolio.html',
			controller : 'mainCtrl'
		})
		.when('/about-me', {
			templateUrl : 'pages/about-me.html',
			controller : 'mainCtrl'
		})
});





	
// app.config(function($routeProvider) {
// 	$routeProvider
// 		.when('/home', {
// 			templateUrl : 'index.html',
// 			controller : 'mainCtrl'
// 		})
// 		.when('pages/aboutMe', {
// 			templateUrl : 'Pages/aboutMe.html',
// 			controller : 'aboutMeCtrl'
// 		})
// 		.when('pages/portfolio', {
// 			templateUrl : 'Pages/portfolio.html',
// 			controller : 'portfolioCtrl'
// 		});
// });