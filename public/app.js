angular.module('app', ['ui.router'])

  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
        .state('home', {
          url: '/',
          views : {
            '':{
              templateURL: './views/main.html'
            }, 
            'nav@home': {
              templateURL: './views/assets/nav.html'
            }, 
            'body@home': {
              templateURL:'./views/body.html'
            },
            'footer@home': {
              templateURL:'./views/assets/footer.html'
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

      $locationProvider.html5Mode(true)
    }]);
