(function() {
'use strict';

/**
 * Details Controller
 */
angular
  .module('myapp.details')
  .controller('DetailsController', Controller);

Controller.$inject = [
  'UsersService',
  '$routeParams'
];

function Controller(UsersService, $routeParams) {
  console.log("Details controller instantiated");
  var vm = this;
  vm.name = "Details Comp";
    
  if ($routeParams.id) {
    angular.extend(vm, UsersService.getById(parseInt($routeParams.id)));
  }
}

})();