angular.module('beerApp')
.controller('accountController', function($scope, $http, $rootScope, $location) {
  $scope.login = function() {
    $http.post('/logout',)
    .then(function(logoutResponse) {
      // console.log(logoutResponse.status);
      // console.log(logoutResponse.data);
      if(loginResponse.data) {
      $rootScope.authenticated = false;
      $rootScope.current_user = '';
      $location.path('/loginResponse');
      //console.log("the user is logged out");
      }
    });
  };









});


