'use strict';

module.exports =
    /*@ngInject*/
    function Phone($routeParams) {
        var vm = this;
        vm.phoneId = $routeParams.phoneId;
    };