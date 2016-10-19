// var routeApp = angular.module('routeApp',['ngRoute','angularCSS']);
// routeApp.config(['$routeProvider',function($routeProvider){
// 	$routeProvider
// 	.when('/column',{
// 		templateUrl:'column.html',
// 		css:'column.css'
// 	})
// 	.when('/table',{
// 		templateUrl:'table.html',
// 		controller:'RouteListCtl'
// 	})
// 	.when('/button',{
// 		templateUrl:'button.html',
// 		controller:'RouteListCtl'
// 	})
// 	.when('/dropdown',{
// 		templateUrl:'dropdown.html',
// 		controller:'RouteDropdownCtl'
// 	})
// 	.when('/form',{
// 		templateUrl:'form.html'
// 	})
// 	.when('/font',{
// 		templateUrl:'font.html',
// 		controller:'RouteFontCtrl'
// 	})
// 	.when('/label',{
// 		templateUrl:'label.html'
// 	})
// 	.otherwise({
// 		redirectTo:'/'
// 	});
// }]);
var myApp = angular.module("routeApp", ['ui.router','angularCSS']);
myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/bootstrap/column");

    $stateProvider
        .state("bootstrap", {
            url: "/bootstrap",
            templateUrl: "bootstrap/bootstrap.html",
            controller:'RouteListCtl'
        })
        .state("mongodb", {
            url: "/mongodb",
            templateUrl: "study/mongodb.html"
        })
        .state("webpack", {
            url: "/webpack",
            templateUrl: "study/webpack.html"
        })
        .state("angular", {
            url: "/angular",
            templateUrl: "study/angular.html"
        })
        .state("bootstrap.button", {
            url: "/button",
            templateUrl: "bootstrap/button.html"
        })
        .state("bootstrap.column", {
            url: "/column",
            templateUrl: "bootstrap/column.html",
            css:'bootstrap/column.css'
        })
        .state("bootstrap.table", {
            url: "/table",
            templateUrl: "bootstrap/table.html"
        })
        .state("bootstrap.dropdown", {
            url: "/dropdown",
            templateUrl: "bootstrap/dropdown.html",
            controller:'RouteDropdownCtl'
        })
        .state("bootstrap.form", {
            url: "/form",
            templateUrl: "bootstrap/form.html"
        })
        .state("bootstrap.font", {
            url: "/font",
            templateUrl: "bootstrap/font.html",
            controller:'RouteFontCtrl'
        })
        .state("bootstrap.label", {
            url: "/label",
            templateUrl: "bootstrap/label.html"
        })
});

myApp.run(['$rootScope',  function($rootScope, $state){
//监听路由事件
}]);
