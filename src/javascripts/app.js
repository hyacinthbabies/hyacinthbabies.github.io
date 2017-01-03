var myApp = angular.module("routeApp", ['ui.router', 'angularCSS', 'ngCookies']);
// Mock.mockjax(myApp);
myApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/bootstrap/column");

    $stateProvider
        .state("bootstrap", {
            url: "/bootstrap",
            templateUrl: "/src/bootstrap/bootstrap.html",
            controller: 'RouteListCtl',
            css: '/src/bootstrap/bootstrap.css'
        })
        .state("mongodb", {
            url: "/mongodb",
            templateUrl: "/src/study/mongodb/mongodb.html",
            css: '/src/study/mongodb/mongodb.css'
        })
        .state("webpack", {
            url: "/webpack",
            templateUrl: "/src/study/webpack/webpack.html"
        })
        .state("angular", {
            url: "/angular",
            templateUrl: "/src/study/angularjs/angular.html",
            css: '/src/study/angularjs/angular.css'
        })
        .state("angular.config", {
            url: "/config",
            templateUrl: "/src/study/angularjs/angular-config.html",
            controller: 'configControl'
        })
        .state("angular.router", {
            url: "/router",
            templateUrl: "/src/study/angularjs/angular-router.html",
            css: '/src/study/angularjs/angular-router.css'
        })
        .state("angular.promise", {
            url: "/promise",
            templateUrl: "/src/study/angularjs/angular-$q.html",
            css: '/src/study/angularjs/angular-$q.css'
        })
        .state("bootstrap.button", {
            url: "/button",
            templateUrl: "/src/bootstrap/button.html"
        })
        .state("bootstrap.column", {
            url: "/column",
            templateUrl: "/src/bootstrap/column.html",
            css: '/src/bootstrap/column.css'
        })
        .state("bootstrap.table", {
            url: "/table",
            templateUrl: "/src/bootstrap/table.html"
        })
        .state("bootstrap.dropdown", {
            url: "/dropdown",
            templateUrl: "/src/bootstrap/dropdown.html"
        })
        .state("bootstrap.form", {
            url: "/form",
            templateUrl: "/src/bootstrap/form.html"
        })
        .state("bootstrap.font", {
            url: "/font",
            templateUrl: "/src/bootstrap/font.html",
            controller: 'RouteFontCtrl'
        })
        .state("bootstrap.label", {
            url: "/label",
            templateUrl: "/src/bootstrap/label.html"
        })
        .state("bootstrap.typeset", {
            url: "/typeset",
            templateUrl: "/src/bootstrap/typeset.html"
        })
        .state("bootstrap.plugin", {
            url: "/plugin",
            templateUrl: "/src/bootstrap/plugin.html"
        })
        .state("backend", {
            url: "/backend",
            templateUrl: "/src/adminsys/login.html",
            css: '/src/adminsys/login.css',
            controller: 'loginControl'
        })
        .state("javas", {
            url: "/javas",
            templateUrl: "/src/study/javascript/summary.html",
            css: '/src/study/javascript/summary.css',
            controller: 'summaryControl'
        })
});
