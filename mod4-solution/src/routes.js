(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  // Setup UI states

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menuapp-categories.template.html',
    controller: 'MenuCategoriesController as categories'

  })
}

}());
