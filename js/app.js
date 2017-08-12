angular.module('TodoApp', ['ngRoute', 'angular-storage', 'RouteControllers', 'UserService', 'TodoService', 'TodoDirective']);

angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/todo', {
        templateUrl: 'templates/todo.html',
        controller: 'TodoController'
    });
});