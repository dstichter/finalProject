angular.module('beerApp').controller('apiController', function($scope, $http) {
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.breweryApiCall = function(){
    $http.post('/apiCall', {
      search: $scope.searchVal,
      searchType: $scope.searchType
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.breweryApi = result.data;
    })
  }
  $scope.beerApiCall = function(breweryId){
    $http.post('/beerApiCall', {
      id: breweryId
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.beerApi = result.data;
    })
  }
  $scope.navbarSearch = function(){
    $http.post('/navbarApiCall', {
      name: $scope.searchName,
      type: $scope.type
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.beerApi = result.data;
    })
  }
});
