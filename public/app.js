angular.module('beerApp', ['ui.router'])
 .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
   $urlRouterProvider.otherwise('/');
   $stateProvider
     .state('main', {
       url: '/',
       views: {
         '': {
           templateUrl: '/views/main.html'
         },
         'nav@main': {
           templateUrl: '/views/assets/nav.html'
         },
         'body@main': {
           templateUrl: '/views/body.html'
         },
         'footer@main': {
           templateUrl: '/views/assets/footer.html'
         }
       }
     })
     $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
     });
 });