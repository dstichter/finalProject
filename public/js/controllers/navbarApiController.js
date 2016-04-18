angular.module('beerApp').controller('navbarApiController', function($scope, $http, $stateParams) {
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.navbarApi = []
  $scope.init = function(){
    $http.post('/navbarApiCall', {
      name: $stateParams.search,
      type: $stateParams.searchType
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.navbarApi = result.data;
      window.scrollTo(0,500);
    })
  }
});
