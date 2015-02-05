'use strict';

module.exports =
    /*@ngInject*/
    function Phones(dataContext) {
        var vm = this;
        vm.orderProp = 'age';
        vm.phones = dataContext.query();
    };