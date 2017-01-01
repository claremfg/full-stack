(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuDataService', 'categories'];
  function MenuCategoriesController(MenuDataService, categories){

    console.log('categories = ', categories);
    var menuCategories = this;
    menuCategories.categories = categories;
    console.log('menuCategories.categories = ', menuCategories.categories);
  }

}());
