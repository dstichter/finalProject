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
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
          },
          'body@main': {
            templateUrl: '/views/body.html'
          },
          'footer@main':{
            templateUrl: '/views/assets/footer.html'
          }
        }
      })

      .state('profile', {
        url: '/profile',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@profile': {
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
          },
          'body@profile':{
            templateUrl: '/views/partials/profile-partial.html',
            controller: 'apiController'
          },
          'footer@profile':{
            templateUrl: '/views/assets/footer.html'
          }
        },
        authenticate: true
      })

      .state('search', {
        url: '/search',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@search': {
            templateUrl: '/views/assets/nav.html'
          },
          'body@search': {
            templateUrl: '/views/partials/search-partial.html',
            controller: 'apiController'
          },
          'footer@search':{
            templateUrl: '/views/assets/footer.html'
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
          },
          'footer@login':{
            templateUrl: '/views/assets/footer.html'
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
          },
          'footer@register':{
            templateUrl: '/views/assets/footer.html'
          }
        }
      })

      .state('searchResult', {
        url: '/searchResult?search&searchType',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@searchResult': {
            templateUrl: '/views/assets/nav.html'
          },
          'body@searchResult': {
            templateUrl: '/views/partials/searchResult.html',
            controller: 'navbarApiController'
          },
          'footer@searchResult':{
            templateUrl: '/views/assets/footer.html'
          }
        }
      })
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
