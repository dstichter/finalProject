angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/body.html'
      })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    });
