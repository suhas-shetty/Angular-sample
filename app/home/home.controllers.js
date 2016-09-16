( function() {

	"use strict";

	var homeControllers = angular.module('homeControllers', []);

	var homeController = function($scope, $timeout, Utils){
		logMessage("we are at home");

		var mainCtrl = $scope.$parent.mainCtrl;
		
		mainCtrl.toggleLoadingScreen(true);	
		$timeout(function(){
			mainCtrl.toggleLoadingScreen(false);
			Utils.showMessage("home sweet home");
		},1000);
	};

	homeController.$inject = ['$scope', '$timeout', 'Utils'];
	homeControllers.controller('homeController', homeController);

})();