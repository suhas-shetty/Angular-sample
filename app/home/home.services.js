( function() {

	"use strict";

	var homeServices = angular.module('homeServices', ['ngResource']);

	var homeService = function($resource){
		return {
			
		}
	};

	homeService.$inject = ['$resource'];
	homeServices.factory('Home', homeService);

})();