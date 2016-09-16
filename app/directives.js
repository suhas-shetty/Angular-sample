( function() {

	"use strict";

	var directives = angular.module('directives', ['ngMaterial']);

	var sideMenuDirective = function(){
		return{
			restrict: 'E',
			scope: true,
			templateUrl: env.baseUrl + '/app/common-views/sidemenu.html'
		};
	};

	sideMenuDirective.$inject = [];
	directives.directive('asSidemenu', sideMenuDirective);

	var toolBarDirective = function($mdSidenav){
		return{
			restrict: 'E',
			scope: true,
			templateUrl: env.baseUrl + '/app/common-views/toolbar.html',
			controller: function($scope){
				var ctrl = this;
				ctrl.openSideMenu = function(id){
					$mdSidenav(id).toggle().then(function () {
			        	console.log("toggle " + id + " is done");
			        });
				};
			},
			controllerAs: 'toolBarCtrl'
		};
	};

	toolBarDirective.$inject = ['$mdSidenav'];
	directives.directive('asToolbar', toolBarDirective);

})();