'use strict';

angular.module('myApp.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/app/src/about/about.tpl.html',
    controller: 'aboutCtrl'
  });
}])

.controller('aboutCtrl', ['$scope', function($scope) {
	
	
	
}]);