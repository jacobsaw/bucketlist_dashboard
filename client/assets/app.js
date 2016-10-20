var app = angular.module('app', ['ngRoute', 'ngCookies', 'ngMessages']);
app.config(function ($routeProvider) {
	$routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'userController',
    })
    .when('/lists', {
      templateUrl: 'partials/lists.html',
      controller: 'listController',
    })
    .when('/friend/:id', {
      templateUrl: 'partials/friend.html',
      controller: 'friendController',
    })
    .otherwise({
      redirectTo: '/'
    });
});