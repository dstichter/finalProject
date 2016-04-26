angular.module('beerApp').controller('resultsController', function($scope, $http, $rootScope, $stateParams, apiResults, $timeout) {
  apiResults.store(null,'all')
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.navbarApi = []
  $scope.$watch(function () { return apiResults.get('brewery') }, function (newVal, oldVal) {
    console.log(apiResults.get('brewery'));
    var hold = apiResults.get('brewery')
      if (typeof newVal !== 'undefined') {
        $scope.beerApi = []
        $scope.navbarApi = []
        $scope.breweryApi = hold.data;
      }
  })
  $scope.$watch(function () { return apiResults.get('beer') }, function (newVal, oldVal) {
    console.log(apiResults.get('beer'));
    var hold = apiResults.get('beer')
      if (typeof newVal !== 'undefined') {
        $scope.beerApi = hold.data
        $scope.navbarApi = []
        $scope.breweryApi = []
      }
  })
  $scope.$watch(function () { return apiResults.get('navbar') }, function (newVal, oldVal) {
    console.log(apiResults.get('navbar'));
    var hold = apiResults.get('navbar')
      if (typeof newVal !== 'undefined') {
        $scope.beerApi = []
        $scope.navbarApi = hold.data
        $scope.breweryApi = []
      }
  })
  $scope.beerApiCall = function(breweryId){
    $http.post('/beerApiCall', {
      id: breweryId
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      apiResults.store(result, 'beer')
      $scope.beerApi = result.data;
    })
  }
})
