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
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
          },
          'body@search': {
            templateUrl: '/views/partials/search-partial.html',
            controller: 'apiController'
          },
          'results@search': {
            templateUrl: '/views/partials/search-result-partial.html',
            controller: 'resultsController'
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
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
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
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
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
        url: '/searchResult',
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'nav@searchResult': {
            templateUrl: '/views/assets/nav.html',
            controller: 'apiController'
          },
          'body@searchResult': {
            templateUrl: '/views/partials/search-partial.html',
            controller: 'apiController'
          },
          'results@searchResult': {
            templateUrl: '/views/partials/search-result-partial.html',
            controller: 'resultsController'
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
  })
  .factory('apiResults', function(){
    var beerApi
    var breweryApi
    var navbarApi
      return {
          store: function(res,input){
            if(input == 'beer'){
              beerApi = res
            }
            if(input == 'brewery'){
              breweryApi = res
            }
            if(input == 'navbar'){
              navbarApi = res
            }
              return 'Done';
          },
          get: function(input){
            if(input == 'beer'){
              return beerApi
            }
            if(input == 'brewery'){
              return breweryApi
            }
            if(input == 'navbar'){
              return navbarApi
            }
          }
      }
  });
