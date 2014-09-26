var app = angular.module('app', ['textAngular']);

app.config(function($httpProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
});





	
// app.config(function($routeProvider) {
// 	$routeProvider
// 		.when('/', {
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