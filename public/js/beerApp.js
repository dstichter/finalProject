angular.module('beerApp')
.controller('accountController', function($scope, $http) {
  $scope.createAccount = function() {
    $http.post('/createAccount', { email: $scope.createEmail, password:$scope.createPassword })
    .then(function(createResponse) {
      $scope.users = createResponse.data;
      console.log(createResponse.data);
    });
  }

  $scope.login = function() {
    $http.post('/login', { email: $scope.email1, password:$scope.password1 })
    .then(function(loginResponse) {
      $scope.users1 = loginResponse.data;
      //$scope.loggedIn = true;
      // if ($scope.userName === loginResponse.data[0].name) {
      //   $scope.loggedIn = true;
      // }
      console.log(loginResponse.data);
    });
  }

});
