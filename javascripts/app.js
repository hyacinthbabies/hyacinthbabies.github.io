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
	.otherwise({
		redirectTo:'/'
	});
}]);