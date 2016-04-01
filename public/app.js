angular.module('app', ['ui.router'])

  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
        .state('home', {
          url: '/',
          views : {
            '':{
              templateURL: '/views/main.html'
            }, 
            'nav@home': {
              template: './views/assets/nav.html'
            }, 
            'body@home': {
              template:'./views/body.html'
            },
            'footer@home': {
              template:'./views/assets/footer.html'
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
              templateURL:'/views/login.html'
            },
            'footer@login': {
              templateURL:'/views/assets/footer.html'
            }
          }
        })

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    }]);
