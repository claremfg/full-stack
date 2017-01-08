(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {'short_name': shortName};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      // This returns all the menu items, so find the matching item
      for (var i = 0; i < response.data.menu_items.length; i++) {
        var item = response.data.menu_items[i];

        if (item.short_name === shortName){
          var favourite = {
              shortName: item.short_name,
              name: item.name,
              description: item.description
          };
          console.log("Favourite found = ", favourite);
          break;
        }
      }
      return favourite;
    });
  };
}



})();
