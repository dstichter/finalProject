angular.module('beerApp')
.controller('accountController', function($scope, $http, $rootScope, $location) {
  $scope.createAccount = function() {
    $http.post('/createAccount', {
      email: $scope.createEmail,
      password:$scope.createPassword,
      username:$scope.createUserName })
    .then(function(createResponse) {
      if (createResponse.data === null) {
        console.log("the user is saved");
        console.log(createResponse.data);
        $location.path('/');

      } else {
        console.log("the user exists");
        console.log(createResponse.data);
        $location.path('/');
      }
      $scope.users = createResponse.data;
    });
  };

  $scope.login = function() {
    $http.post('/login', {
      email: $scope.email1,
      password:$scope.password1,
      username:$scope.inputUserName })
    .then(function(loginResponse) {
      if (loginResponse.data.username) {
      $rootScope.authenticated = true;
      $rootScope.current_user = loginResponse.data.username;
      $location.path('/');
      console.log("the user is logged in");
      console.log(loginResponse.data.username);
      }
    });
  };

});
