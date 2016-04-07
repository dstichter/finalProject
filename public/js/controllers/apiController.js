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
    //  $http.get('http://api.brewerydb.com/v2/brewery/'+ $scope.breweryId +'/beers/?key=c356754ec7ae15423029d49c154921c0').then(function(response) {
    //    $scope.beers = response.data
    //  })
    console.log(breweryId);
    $http.post('/beerApiCall', {
      id: breweryId
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.beerApi = result.data;
    })
  }
});
