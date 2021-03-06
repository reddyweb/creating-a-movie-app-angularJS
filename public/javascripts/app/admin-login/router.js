const angular = require('angular');

const baseUrl = 'javascripts/app/admin-login/views/';

angular.module('admin')
  .config($routeProvider => {
    $routeProvider.when('/login', {
      templateUrl: baseUrl + 'login-form.html'
    });
    $routeProvider.when('/movies', {
      templateUrl: baseUrl + 'movies.html'
    });
    $routeProvider.otherwise({
      redirectTo: '/login'
    });
  });