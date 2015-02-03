'use strict';

module.exports =
    /*@ngInject*/
    function Phone($routeParams, $http) {
        var vm = this;

        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            vm.phone = data;
        });
    };