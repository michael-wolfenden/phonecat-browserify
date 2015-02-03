'use strict';

module.exports =
    /*@ngInject*/
    function Phones($http) {
        var vm = this;
        vm.orderProp = 'age';

        _activate();

        function _activate() {
            $http.get('phones/phones.json').success(function (data) {
                vm.phones = data;
            });
        }
    };