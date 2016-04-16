angular.module('beerApp')
.controller('accountController', function($scope, $http, $rootScope, $location) {
  $scope.createAccount = function() {
    $http.post('/createAccount', {
      email: $scope.createEmail,
      password:$scope.createPassword,
      username:$scope.createUserName })
    .then(function(createResponse) {
      if (createResponse.data === null) {
        //console.log("the user is saved");
        //console.log(createResponse.data);
        $location.path('/login');

      } else {
        //console.log("the user exists");
        //console.log(createResponse.data);
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
      // console.log(loginResponse.status);
      // console.log(loginResponse.data);
      if (loginResponse.data.username) {
      $rootScope.authenticated = true;
      $rootScope.current_user = loginResponse.data.username;
      $location.path('/profile');
      //console.log("the user is logged in");
      } else {
      //console.log("the user is not logged in");
      $scope.notLoggedIn = true;
      }
    });
  };

});
