(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
   var menu = this;

   menu.searchTerm = "";
   menu.errorMessage = "";

   menu.getMatchedMenuItems = function () {

     if ((!menu.searchTerm) || (menu.searchTerm === "")){
       menu.errorMessage = "Nothing found!";
       return;
     }

     var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

     promise.then(function (foundItems) {
       menu.found = foundItems;

       if (!menu.found.length){
            menu.errorMessage = "Nothing found!";
       }
       console.log("Menu.found = ", menu.found);
     })
     .catch(function (error) {
       console.log("Error getting matched menu items");
     });
   }

   menu.removeItem = function (index) {
     menu.found.splice(index, 1);
   }

};

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemDirectiveController(){
  var list = this;
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;


  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];

    console.log("getMatchedMenuItems() searchTerm =  ",  searchTerm);

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }). then (function (response) {
      console.log("getMatchedMenuItems() response.data =  ",  response.data);


      for (var i = 0; i < response.data.menu_items.length; i++) {
        var item = response.data.menu_items[i];

        if (item.description.indexOf(searchTerm) !== -1){
          foundItems.push(item);
        }
      }

      console.log("getMatchedMenuItems() foundItems =  ",  foundItems);
      return foundItems;
    });



  };
};

})();
