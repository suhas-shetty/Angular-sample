( function() {

	"use strict";

	var directives = angular.module('directives', []);

	var sideMenuDirective = function(){
		return{
			restrict: 'E',
			scope: true,
			templateUrl: env.baseUrl + '/app/common-views/sidemenu.html',
			controller: function($scope){
				this.open = function(id){
					$mdSidenav(id).toggle();
				};
			},
			// controllerAs: 'sideMenuCtrl'
		};
	};

	sideMenuDirective.$inject = [];
	directives.directive('sideMenu', sideMenuDirective);

	var toolBarDirective = function(){
		return{
			restrict: 'E',
			scope: true,
			templateUrl: env.baseUrl + '/app/common-views/toolbar.html',
			require: 'sideMenu',
			// controller: function($scope, sideMenuCtrl){
			// 	this.openSideMenu = function(id){
			// 		sideMenuCtrl.open(id);
			// 		console.log("toolbar");
			// 	};
			// },
			link: function(scope, element, attrs, sideMenuCtrl){
				scope.openSideMenu = function(id){
					sideMenuCtrl.open(id);
					console.log("toolbar");
				};
			},
			controllerAs: 'toolBarCtrl'
		};
	};

	toolBarDirective.$inject = [];
	directives.directive('toolbar', toolBarDirective);

})();