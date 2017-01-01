(function() {
  'use strict';

  angular.module('MenuApp')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['MenuDataService', 'items'];
  function MenuItemsController(MenuDataService, items){

    var menuItems = this;
    menuItems.items = items;

  }

}());
