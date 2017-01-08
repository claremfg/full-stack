(function functionName() {

angular.module('common')
  .service('UserService', UserService);

  function UserService() {
    var service = this;

    // The user !!!
    var user ;

    service.addUser = function (signedUser) {
      user = signedUser;
    };

    service.getUser = function () {
      return user;
    };
  }
})();
