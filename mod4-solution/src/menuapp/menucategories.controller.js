(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuDataService'];
  function MenuCategoriesController(MenuDataService){

    var menuCategories = this;
    menuCategories.categories = [];

    menuCategories.$onInit = function () {
      MenuDataService.getAllCategories()
      .then(function(result){
        menuCategories.categories = result.data;
      });
    }
  }

}());
