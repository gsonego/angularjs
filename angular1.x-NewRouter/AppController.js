(function() {
'use strict';

/**
 * App Controller
 */
angular
  .module('myapp')
  .controller('AppController', AppController);


AppController.$inject = [
  '$router',
  '$location'
];

function AppController($router, $location) {
  //setup during controller instantiation
  $router.config([
    { path: '/home', component: 'home' },
    { path: '/users', component: 'users' },
    { path: '/', redirectTo: '/home' }
  ]);

  console.log("Force default route to /");
  $location.path('/'); //set default otherwise is blank
}

})();