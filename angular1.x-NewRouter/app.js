angular
  .module('myapp', [
    'ngNewRouter',
    'myapp.home',
    'myapp.users'
  ])

.config(function ($componentLoaderProvider) {
  // change default template location
  //   from : ./components/my-widget/my-widget.html
  //   to:    ./my-widget.tpl.html
  $componentLoaderProvider.setTemplateMapping(function setTemplateMapping(name) {
        // name is component name
        var path = 'modulos/' + name + '/' + name + '.tpl.html';

        return path;
    });
    
});