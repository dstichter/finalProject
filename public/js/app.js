angular.module('beerApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider'
    function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');
      $stateProvider
      .state('home', {
        url: '/',
        views{
          '':{
            templateURL: './public/views/main.html'
          }, 
          'nav@home': {
            templateURL: './public/views/assets/nav.html'
          }, 
          'body@home': {
            './public/views/body.html'
          },
          'footer@home': {
            './public/views/assets/nav.html'
          }
        }
      });

      .state('login', {
        url: "/login",
        views{
          '':{
            templateURL: './public/views/main.html'
          },
          'nav@login': {
            templateURL: './public/views/assets/nav.html'
          }, 
          'body@home': {
            './public/views/login.html'
          },
          'footer@login': {
            './public/views/assets/nav.html'
          }
        }
      });
    }
  ]);