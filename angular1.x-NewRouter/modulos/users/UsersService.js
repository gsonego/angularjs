(function() {
'use strict';

/**
 * Users Service
 */
angular
  .module('myapp')
  .factory('UsersService', Service);
  
Service.$inject = [
  '$filter'
];  

function Service($filter){
  var users = [{
      id: 1,
      username: 'batman',
      roles: ['admin', 'user']
    }, {
      id: 2,
      username: 'spiderman',
      roles: ['user']
    }, {
      id: 3,
      username: 'superman',
      roles: ['admin','user']
    }, {
      id: 4,
      username: 'hulk',
      roles: ['user']
    }, {
      id: 5,
      username: 'ironman',
      roles: ['user']
    }];
  
  var get = function() {
    return users;
  }
  
  var getById = function(id) {
    if(!id) return {};
    return $filter('filter')(users, {id:id}, true)[0] || {};
  }

  return {
    get: get,
    getById: getById
  }
}

})();