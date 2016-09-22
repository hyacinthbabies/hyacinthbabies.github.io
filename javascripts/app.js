var routeApp = angular.module('routeApp',['ngRoute']);
routeApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/table',{
		templateUrl:'table.html',
		controller:'RouteListCtl'
	})
	.when('/',{
		templateUrl:'button.html',
		controller:'RouteListCtl'
	})
	.when('/dropdown',{
		templateUrl:'dropdown.html',
		controller:'RouteDropdownCtl'
	})
	.when('/form',{
		templateUrl:'form.html'
	})
	.when('/font',{
		templateUrl:'font.html'
	})
	.when('/label',{
		templateUrl:'label.html'
	})
	.otherwise({
		redirectTo:'/'
	});
}]);