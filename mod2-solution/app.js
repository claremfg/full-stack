(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyCtrl.bought = function(itemIndex){
      ShoppingListCheckOffService.addItem(itemIndex);
      ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
       {name: 'turkey', amount: 1},
       {name: 'ham', amount: 1},
       {name: 'potatoes', amount: 30},
       {name: 'carrots', amount: 10},
       {name: 'christmas cake', amount: 1},
       {name: 'mince pies', amount: 12},
       {name: 'brussel sprouts', amount: 15},
       {name: 'red wine', amount: 2},
       {name: 'white wine', amount: 2},
       {name: 'prosecco', amount: 2}

    ];
    var boughtItems = [];

    service.addItem = function(idx){
      var item = toBuyItems[idx];
      boughtItems.push(item);
    }

    service.removeItem = function (idx) {
      toBuyItems.splice(idx, 1);

    }

    service.getToBuyItems = function () {
      return toBuyItems;
    }

    service.getBoughtItems = function () {
      return boughtItems;
    }
  }
}) ();
