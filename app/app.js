var sample = angular.module('sample', [
	'ngRoute',
	'directives',
	'services',
	'home'
]);

sample.config(
	function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: env.baseUrl + '/app/home/views/home.html',
			controller: 'homeController'
		})
		.otherwise({
			redirectTo: '/home'
		});
	}
);