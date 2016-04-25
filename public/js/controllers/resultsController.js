angular.module('beerApp').controller('resultsController', function($scope, $http, $rootScope, $stateParams, apiResults, $timeout) {
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.navbarApi = []
  $scope.$watch(function () { return apiResults.get('brewery') }, function (newVal, oldVal) {
    console.log(apiResults.get('brewery'));
    var hold = apiResults.get('brewery')
      if (typeof newVal !== 'undefined') {
          $scope.breweryApi = hold.data;
      }
  })
  $scope.$watch(function () { return apiResults.get('beer') }, function (newVal, oldVal) {
    console.log(apiResults.get('beer'));
    var hold = apiResults.get('beer')
      if (typeof newVal !== 'undefined') {
          $scope.beerApi = hold.data;
      }
  })
  $scope.$watch(function () { return apiResults.get('navbar') }, function (newVal, oldVal) {
    console.log(apiResults.get('navbar'));
    var hold = apiResults.get('navbar')
      if (typeof newVal !== 'undefined') {
          $scope.navbarApi = hold.data;
      }
  })
})
