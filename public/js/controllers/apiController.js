angular.module('beerApp').controller('apiController', function($scope, $http, $rootScope, $stateParams, apiResults) {
  $scope.breweryApi = []
  $scope.beerApi = []
  $scope.favBeers = []
  $scope.navbarApi = []
  $scope.searchName = ''
  $scope.type = ''
  $scope.breweryApiCall = function(){
    $http.post('/apiCall', {
      search: $scope.searchVal,
      searchType: $scope.searchType
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      apiResults.store(result, 'brewery')
      $scope.breweryApi = result.data;
    })
  }
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
  $scope.navbarSearch = function(){
    $http.post('/navbarApiCall', {
      name: $scope.searchName,
      type: $scope.type
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      apiResults.store(result, 'navbar')
      $scope.beerApi = result.data;
    })
  }
  $scope.favoriteBeer = function(id){
    console.log('id: ' + id);
    $http.post('/favorite',{user: $rootScope.current_user, beerId: id}).then(function(response){

    })
  }
  $scope.favoriteBeersCall = function() {
    $http.post('/favoriteBeers', {
      user: $rootScope.current_user
    })
    .then(function(response){
      console.log(response);
      var result = JSON.parse(response.data);
      $scope.favBeers = result.data;
    })
  }
  $scope.removeFavorite = function(id){
    $http.post('/removeFavorite', {
      user: $rootScope.current_user,
      beerId: id
    }).then(function(response){
      $scope.favoriteBeersCall()
    })
  }
  $scope.init = function(){
    $http.post('/navbarApiCall', {
      name: $stateParams.search,
      type: $stateParams.searchType
    }).then(function(response){
      var result = JSON.parse(response.data);
      console.log(result);
      $scope.navbarApi = result.data;
    })
  }
});
