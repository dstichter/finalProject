angular.module('beerApp').controller('resultsController', function($scope, $http, $rootScope, $stateParams, apiResults, $timeout) {
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.$watch(function () { return apiResults.get() }, function (newVal, oldVal) {
    console.log(apiResults.get());
    var hold = apiResults.get()
      if (typeof newVal !== 'undefined') {
          $scope.breweryApi = hold.data;
      }
  });
})
