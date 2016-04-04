angular.module('beerApp').controller('apiController', function($scope, $http) {
  $scope.breweryApiCall = function(){
    console.log('test');
    var replaced = $scope.searchVal.replace(/ /g, '%20');
    $http.post('/apiCall', {
      search: $scope.searchVal,
      searchType: $scope.searchType
    })


  }
  $scope.beerApiCall = function(){
     $http.get('http://api.brewerydb.com/v2/brewery/'+ $scope.breweryId +'/beers/?key=c356754ec7ae15423029d49c154921c0').then(function(response) {
       $scope.beers = response.data
     })
  }
});
