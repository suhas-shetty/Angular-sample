( function() {
	
	"use-strict";

	var services = angular.module('services', []);

	utilsService = function(ngDialog){
		return{
			showMessage: function(msg){
				ngDialog.open({
					template: env.baseUrl + '/app/common-views/sample-message.html',
					overlay: false,
					controller: ['$scope', function($scope){
						$scope.msg = msg;
					}]
				});
			}
		}
	};

	utilsService.$inject = ['ngDialog'];
	services.factory('Utils', utilsService);

})();