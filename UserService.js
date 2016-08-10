(function () {
    "use strict"

    angular.module(APPNAME)
         .factory('$userService', UserService);

    UserService.$inject = ['$baseService'];

    function UserService($baseService) {
        var aSabioServiceObject = sabio.services.users;

        var newService = $baseService.merge(true, {}, aSabioServiceObject, $baseService);

        return newService;
    };
})();
