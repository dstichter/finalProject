angular.module('beerApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        views : {
          '':{
            templateURL: '/views/main.html'
          }, 
          'nav@home': {
            templateURL: '/views/assets/nav.html'
          }, 
          'body@home': {
            '/views/body.html'
          },
          'footer@home': {
            '/views/assets/nav.html'
          }
        }
      })

      .state('login', {
        url: "/login",
        views : {
          '':{
            templateURL: '/views/main.html'
          },
          'nav@login': {
            templateURL: '/views/assets/nav.html'
          }, 
          'body@login': {
            '/views/login.html'
          },
          'footer@login': {
            '/views/assets/nav.html'
          }
        }
      })
    }]);