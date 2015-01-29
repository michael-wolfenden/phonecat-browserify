'use strict';

module.exports =
    /*@ngInject*/
    function Phones($http) {
        var vm = this;
        vm.orderProp = 'age';

        $http.get('phones/phones.json').success(function (data) {
            vm.phones = data;
        });
    };