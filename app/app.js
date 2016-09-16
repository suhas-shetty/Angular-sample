var sample = angular.module('sample', [
	'ngRoute',
	'ngDialog',
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

/**
 * mainController function for the app
 */
var mainController = function(){
	var ctrl = this;
	ctrl.showLoadingScreen = false;

	ctrl.toggleLoadingScreen = function(state){
		ctrl.showLoadingScreen = state;
	};
};

mainController.$inject = [];
sample.controller('mainController', mainController);