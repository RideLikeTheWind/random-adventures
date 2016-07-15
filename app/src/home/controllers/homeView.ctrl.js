'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/app/src/home/views/home.tpl.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', 'dataService', 'modelFactory_writingOptions', function($scope, dataService, modelFactory_writingOptions) {
	
	
	$scope.writing_options = modelFactory_writingOptions.getWritingOptions();
	$scope.highlightList1Option = function(index) {
		$scope.list1 = index;
	}
	$scope.highlightList2Option = function(index) {
		$scope.list2 = index;
	}
	$scope.highlightList3Option = function(index) {
		$scope.list3 = index;
	}
	
	$scope.clearOptions = function() {
		$scope.list1 = -1;
		$scope.list2 = -1;
		$scope.list3 = -1;
	}
	
	$scope.selectRandom = function() {
		$scope.list1 = Math.floor((Math.random() * $scope.writing_options[0].options.length) + 0);
		$scope.list2 = Math.floor((Math.random() * $scope.writing_options[1].options.length) + 0);
		$scope.list3 = Math.floor((Math.random() * $scope.writing_options[2].options.length) + 0);
	}
}]);