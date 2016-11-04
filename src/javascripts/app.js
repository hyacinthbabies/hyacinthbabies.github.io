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
var myApp = angular.module("routeApp", ['ui.router','angularCSS','ngCookies']);
// Mock.mockjax(myApp);
myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/bootstrap/column");

    $stateProvider
        .state("bootstrap", {
            url: "/bootstrap",
            templateUrl: "/src/bootstrap/bootstrap.html",
            controller:'RouteListCtl',
            css:'/src/bootstrap/bootstrap.css'
        })
        .state("mongodb", {
            url: "/mongodb",
            templateUrl: "/src/study/mongodb/mongodb.html",
            css:'/src/study/mongodb/mongodb.css'
        })
        .state("webpack", {
            url: "/webpack",
            templateUrl: "/src/study/webpack/webpack.html"
        })
        .state("angular", {
            url: "/angular",
            templateUrl: "/src/study/angularjs/angular.html",
            css:'/src/study/angularjs/angular.css'
        })
        .state("angular.config", {
            url: "/config",
            templateUrl: "/src/study/angularjs/angular-config.html"
        })
        .state("angular.router", {
            url: "/router",
            templateUrl: "/src/study/angularjs/angular-router.html",
            css:'/src/study/angularjs/angular-router.css'
        })
        .state("bootstrap.button", {
            url: "/button",
            templateUrl: "/src/bootstrap/button.html"
        })
        .state("bootstrap.column", {
            url: "/column",
            templateUrl: "/src/bootstrap/column.html",
            css:'/src/bootstrap/column.css'
        })
        .state("bootstrap.table", {
            url: "/table",
            templateUrl: "/src/bootstrap/table.html"
        })
        .state("bootstrap.dropdown", {
            url: "/dropdown",
            templateUrl: "/src/bootstrap/dropdown.html",
            controller:'RouteDropdownCtl'
        })
        .state("bootstrap.form", {
            url: "/form",
            templateUrl: "/src/bootstrap/form.html"
        })
        .state("bootstrap.font", {
            url: "/font",
            templateUrl: "/src/bootstrap/font.html",
            controller:'RouteFontCtrl'
        })
        .state("bootstrap.label", {
            url: "/label",
            templateUrl: "/src/bootstrap/label.html"
        })
        .state("backend", {
            url: "/backend",
            templateUrl: "/src/adminsys/login.html",
            css:'/src/adminsys/login.css',
            controller:'loginControl'
        })
});