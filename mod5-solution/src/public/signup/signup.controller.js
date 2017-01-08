(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.submit = function () {

    MenuService.getMenuItem($ctrl.user.favourite.short_name).
      then(function (favourite) {

          // Save the User details
          $ctrl.user.favourite.title = favourite.name;
          $ctrl.user.favourite.description = favourite.description;
          UserService.addUser($ctrl.user);

          $ctrl.completed = true;
          $ctrl.favouriteError = false;
        })
        .catch(function (error) {
          $ctrl.completed = false;
          $ctrl.favouriteError = true;
        });


  }
}

})();
