angular.module('beerApp')
.controller('logoutController', function($scope, $http, $rootScope, $location) {
  if ($rootScope.authenticated === true) {
    $scope.loggedOut = true;
  } else {
    $scope.loggedOut = false;
  }
  $rootScope.logout = function() {
    $http.post('/logout')
    .then(function(logoutResponse) {
      // console.log(logoutResponse.status);
      console.log("logging out");
      console.log(logoutResponse.data);
      if(logoutResponse.data) {
      $rootScope.authenticated = false;
      $scope.loggedOut = false;
      $rootScope.current_user = '';
      $location.path('/login');
      console.log("the user is logged out");
      }
    });
  };
});


