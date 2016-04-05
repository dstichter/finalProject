angular.module('beerApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@main': {
            templateUrl: '/views/assets/nav.html'
          },
          'body@main': {
            templateUrl: '/views/body.html'
          },
          'api-partial@main': {
            templateUrl: '/views/partials/search-partial.html',
            controller: 'apiController'
          }
        }
      })

      .state('login', {
        url: '/login',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@login': {
            templateUrl: '/views/assets/nav.html'
          },
          'body@login': {
            templateUrl: '/views/partials/partial-login.html'
          }
        }
      })

      .state('register', {
        url: '/register',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@register': {
            templateUrl: '/views/assets/nav.html'
          },
          'body@register': {
            templateUrl: '/views/partials/partial-register.html'
          }
        }
      })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  });
