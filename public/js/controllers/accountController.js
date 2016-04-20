angular.module('beerApp')
.controller('accountController', function($scope, $http, $rootScope, $location) {
  $scope.createAccount = function() {
    $http.post('/createAccount', {
      email: $scope.createEmail,
      password:$scope.createPassword,
      username:$scope.createUserName })
    .then(function(createResponse) {
      if (createResponse.data === null) {
        $location.path('/login');
      } else {
        $location.path('/register');
        $scope.notRegistered = true;
      }
      $scope.users = createResponse.data;
    });
  };

  $scope.login = function() {
    $http.post('/login', {
      password:$scope.password1,
      username:$scope.inputUserName })
    .then(function(loginResponse) {
      if (loginResponse.data.username) {
      $rootScope.authenticated = true;
      $rootScope.current_user = loginResponse.data.username;
      $location.path('/profile');
      } else {
      $scope.notLoggedIn = true;
      }
    });
  };

});
