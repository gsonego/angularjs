angular
  .module('myapp.users', [
    'myapp.details'
  ])
    

.config(function ($componentLoaderProvider) {
  console.log('users config');
});