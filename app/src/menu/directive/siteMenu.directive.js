'use strict';

angular.module('myApp.siteMenu', []).directive('siteMenu', [ function() {
	return {
		templateUrl: '/app/src/menu/views/siteMenu.tpl.html',
		controller: function($scope) {
		    $scope.site_menu_array = [
		  	  	{title: 'Selector', route: 'home'},
				{title: 'About', route: 'about'}
		    ];
		}
	    
	}
}]);