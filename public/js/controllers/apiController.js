angular.module('beerApp').controller('apiController', function($scope, $http) {
  $scope.breweryApiCall = function(){
    var replaced = $scope.searchVal.replace(/ /g, '%20');
    if($scope.searchType === 'postalCode'){
      $http.get('http://api.brewerydb.com/v2/locations/?key=c356754ec7ae15423029d49c154921c0&postalCode=' + $scope.searchVal).then(function(response) {
        $scope.breweries = response.data
      }
    }
    else if($scope.searchType === 'city'){
      $http.get('http://api.brewerydb.com/v2/locations/?key=c356754ec7ae15423029d49c154921c0&locality=' + replaced).then(function(response) {
        $scope.breweries = response.data
      }
    }
    else if($scope.searchType === 'state'){
      $http.get('http://api.brewerydb.com/v2/locations/?key=c356754ec7ae15423029d49c154921c0&region=' + replaced).then(function(response) {
        $scope.breweries = response.data
      }
    }
  }
  $scope.beerApiCall = function(){
     $http.get('http://api.brewerydb.com/v2/brewery/'+ $scope.breweryId +'/beers/?key=c356754ec7ae15423029d49c154921c0').then(function(response) {
       $scope.beers = response.data
     }
  }
});
